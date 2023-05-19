<script setup>
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiForum } from '@mdi/js';
import { useRouter } from 'vue-router';
import { getUserInfo } from '@/api/user';
import { getAccount } from '@/utils/account';
import { useUserStore } from '@/stores/user';
import { watch } from 'vue';

const userStore = useUserStore();
const active = ref('home');

const router = useRouter();
const title = ref('');
const isShowBar = ref(true);
getUserInfo(getAccount())
  .then(data => {
    console.log(data)
    userStore.setUserInfo(data);
  })
  .catch(err => {
    userStore.reset();
    console.error(err);
  });

watch(router.currentRoute, to => {
  active.value = to.name;
  title.value = to.meta.nav;
});

const replacePath = path => {
  active.value = path;
  router.replace({ name: path });
};
</script>

<template>
  <var-app-bar
    v-if="title"
    :title="title"
    title-position="center"
    color="#e6473e"
    safe-area-top
    elevation
  >
    <template #left>
      <var-button
        @click="$router.back()"
        color="transparent"
        text-color="#fff"
        round
        text
      >
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
  <RouterView />
  <var-bottom-navigation
    v-if="isShowBar"
    active-color="#e6473e"
    @change="replacePath"
    v-model:active="active"
    safe-area
    fixed
  >
    <var-bottom-navigation-item name="home" label="工作通知" icon="home" />
    <var-bottom-navigation-item name="event" label="活动管理">
      <template #icon>
        <svg-icon :size="32" type="mdi" :path="mdiForum"></svg-icon>
      </template>
    </var-bottom-navigation-item>
    <var-bottom-navigation-item name="learn" label="学习" icon="heart" />
    <var-bottom-navigation-item name="message" label="留言" icon="heart" />
    <var-bottom-navigation-item
      name="user"
      label="我的"
      icon="account-circle"
    />
  </var-bottom-navigation>
</template>
