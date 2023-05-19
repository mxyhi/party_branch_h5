<script setup>
import { ref } from 'vue';
import { getMessageList, deleteMessage } from '@/api/message';
import { BASE_URL } from '@/settings/origin';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { Dialog } from '@varlet/ui';
import '@varlet/ui/es/dialog/style/index';

const loading = ref(false);
const finished = ref(false);
const list = ref([]);
const router = useRouter();
const userStore = useUserStore();

let page = 1;

async function load() {
  const { total, data } = await getMessageList({
    page,
    limit: 10,
    id: userStore.id,
  });
  console.log(data);
  list.value = list.value.concat(
    data.map(item => ({
      ...item,
      poster: `${BASE_URL}${item.poster}`,
    }))
  );
  loading.value = false;
  if (list.value.length >= total) {
    finished.value = true;
    return;
  }
  page++;
}

const createAMessage = () => {
  router.push({ name: 'messageAdd' });
};

function createBasic(id) {
  Dialog({
    title: '提示',
    message: '确定删除该留言吗？',
    showCancelButton: true,
    onConfirm: () => {
      deleteMessage(id).then(res => {
        console.log(res);
        router.go(0);
      });
    },
  });
}
</script>

<template>
  <var-app-bar
    title="留言"
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
    <template #right>
      <var-button
        @click="createAMessage"
        color="transparent"
        text-color="#fff"
        round
        text
      >
        <var-icon name="plus-circle-outline" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
  <var-list :finished="finished" v-model:loading="loading" @load="load">
    <var-cell :key="item.id" v-for="item in list">
      <var-card
        :title="item.user.realName"
        :subtitle="item.content"
        layout="row"
        class="item-card"
        ripple
        @click="createBasic(item.id)"
      >
        <template #extra>
          <var-space :size="[8, 8]">
            <var-button text round disabled>
              <p>{{ item.create_time }}</p>
            </var-button>
          </var-space>
        </template>
      </var-card>
    </var-cell>
  </var-list>
</template>

<style>
.card-example-text {
  padding: 14px;
  font-size: 14px;
  line-height: 28px;
}

.item-card {
  margin: 1px 0;
}
</style>
