<script setup>
import { reactive, ref } from 'vue';
import { addMessage } from '../api/message';
import { useRouter } from 'vue-router';

const router = useRouter();
const formData = reactive({
  content: '',
});
const form = ref(null);
const disabled = ref(false);
const readonly = ref(false);

const submit = async () => {
  const isPass = await form.value.validate();
  if (isPass) {
    try {
      const result = await addMessage(formData.content);
      console.log(result);
      router.replace({ name: 'message' });
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
    scroll-to-error="start"
  >
    <var-space direction="column" :size="[14, 0]">
      <var-input
        style="margin: 10px; margin-top: 20px"
        placeholder="请输入留言"
        variant="outlined"
        :rules="[v => !!v || '留言不能为空']"
        textarea
        v-model="formData.content"
      />
    </var-space>
  </var-form>

  <var-space direction="column" :size="[14, 0]">
    <var-button block type="danger" @click="form.reset()"> 重置 </var-button>
    <var-button block type="success" @click="submit"> 添加 </var-button>
  </var-space>
</template>
