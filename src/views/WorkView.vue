<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getWorkDetail, fetchWorkClickCount } from '@/api/work';
import { BASE_URL } from '@/settings/origin';

const route = useRoute();
const router = useRouter();

const workId = route.query.id;

if (!workId) {
  router.replace({ name: 'home' });
}

const data = ref({});
fetchWorkClickCount(workId);
getWorkDetail(workId)
  .then(res => {
    console.log(res);
    if (res == null) {
      router.replace('/');
      return;
    }
    res.poster = BASE_URL + res.poster;
    data.value = res;
  })
  .catch(err => {
    console.error(err);
    router.replace('/');
  });
</script>

<template>
  <div class="content">
    <var-card
      :title="data.title"
      :subtitle="data.desc"
      :description="data.content"
      :src="data.poster"
    >
      <template #extra>
        <var-space>
          <var-button text round disabled>
            <p>发布时间：{{ data.create_time }}</p>
          </var-button>
          <var-button text round disabled>
            <p>更新时间：{{ data.updated_time }}</p>
          </var-button>
          <var-button text round disabled>
            <p>开始时间：{{ data.start_time }}</p>
          </var-button>
          <var-button text round disabled>
            <p>结束时间：{{ data.end_time }}</p>
          </var-button>
          <var-button text round disabled>
            <p>点击量：{{ data.click_count }}</p>
          </var-button>
        </var-space>
      </template>
    </var-card>
  </div>
</template>

<style scoped>
.content {
  padding: 10px 8px 0 8px;
}
</style>
