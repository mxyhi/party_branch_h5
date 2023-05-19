<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  getQuotationDetail,
  fetchQuotationClickCount,
  fetchQuotationStarCount,
  fetchQuotationCollectCount,
} from '@/api/learn/quotation.js';
import { BASE_URL } from '@/settings/origin';

const route = useRoute();
const router = useRouter();

const eventId = route.query.id;

if (!eventId) {
  router.replace({ name: 'home' });
}

fetchQuotationClickCount(eventId);
const data = ref({});
getQuotationDetail(eventId)
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

const starHandle = async () => {
  const res = await fetchQuotationStarCount(eventId);
  res.poster = BASE_URL + res.poster;
  data.value = res;
};

const collectHandle = async () => {
  const res = await fetchQuotationCollectCount(eventId);
  res.poster = BASE_URL + res.poster;
  data.value = res;
};
</script>

<template>
  <div class="content">
    <var-card
      :title="data.title"
      :subtitle="data.desc"
      :description="data.content"
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
          <var-button text round disabled>
            <p>点赞量：{{ data.star_count }}</p>
          </var-button>
          <var-button text round disabled>
            <p>收藏量：{{ data.collect_count }}</p>
          </var-button>
          <div>
            <br />
            <var-button @click="starHandle" text type="warning"
              >点赞</var-button
            >
            <var-button @click="collectHandle" text type="warning"
              >收藏</var-button
            >
          </div>
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
