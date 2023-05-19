<script setup>
import { BASE_URL } from '@/settings/origin';
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

const userStore = useUserStore();

const logout = () => {
  userStore.reset();
  location.reload();
};

const items = ref([
  {
    name: '昵称',
    value: userStore.uname,
  },
  {
    name: '账户',
    value: userStore.account,
  },
  {
    name: '描述',
    value: userStore.desc,
  },
  {
    name: '手机号',
    value: userStore.phone,
  },
  {
    name: '性别',
    value: userStore.sex,
  },
  {
    name: '班级',
    value: userStore.className,
  },
  {
    name: '年龄',
    value: userStore.age,
  },
]);
</script>

<template>
  <main>
    <div class="user-avatar">
      <var-avatar
        :src="
          userStore.avatar.startsWith('http') ||
          userStore.avatar.startsWith('//')
            ? userStore.avatar
            : BASE_URL
            ? BASE_URL + userStore.avatar
            : userStore.avatar
        "
        size="large"
      />
    </div>
    <div style="height: 20px"></div>
    <var-paper :elevation="2">
      <var-cell
        v-for="(item, index) in items"
        :key="item.name"
        ripple
        :icon="item.icon"
        :border="index !== items.length - 1"
        :border-offset="0"
      >
        {{ item.name }}:
        <template #description>
          <span style="opacity: 0.7">{{ item.value }}</span>
        </template>
      </var-cell>
    </var-paper>
    <var-button @click="logout" block type="primary">退出登录</var-button>
  </main>
</template>

<style lang="scss" scoped>
.user-avatar {
  margin-top: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
