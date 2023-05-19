<script setup>
import { reactive, ref } from 'vue';
import { login ,getUserInfo} from '@/api/user';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import { getAccount } from '@/utils/account';

getUserInfo(getAccount())
  .then(data => {
    userStore.setUserInfo(data);
    router.replace({ name: 'home' });
  })
  .catch(err => {
    userStore.reset();
    console.error(err);
  });

const router = useRouter();

const formData = reactive({
  username: '',
  password: '',
});
const form = ref(null);
const disabled = ref(false);
const readonly = ref(false);

const userStore = useUserStore();

const submit = async () => {
  const isPass = await form.value.validate();
  if (isPass) {
    try {
      const result = await login(formData);
      userStore.setUserInfo(result);
      router.replace({ name: 'home' });
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<template>
  <var-form
    ref="form"
    :disabled="disabled"
    :readonly="readonly"
    class="from"
    scroll-to-error="start"
  >
    <var-space direction="column" :size="[14, 0]">
      <var-input
        placeholder="请输入用户名"
        :rules="[
          v => !!v || '用户名不能为空',
          v => v.length >= 4 || '用户名长度不能小于6',
        ]"
        v-model="formData.username"
      />
      <var-input
        type="password"
        placeholder="请输入密码"
        :rules="[
          v => !!v || '密码不能为空',
          v => v.length >= 6 || '密码长度不能小于6',
        ]"
        v-model="formData.password"
      />
    </var-space>
  </var-form>

  <var-space class="action-column" direction="column" :size="[14, 0]">
    <var-button block type="danger" @click="form.reset()"> 重置 </var-button>
    <var-button block type="success" @click="submit"> 登录 </var-button>
  </var-space>
</template>

<style>
.from {
  margin: 100px 10px 50px 10px;
}
.action-column {
  margin: 0 10px;
}
</style>
