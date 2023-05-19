<script setup>
import { ref } from 'vue';
import { getQuotationList } from '@/api/learn/quotation';
import { BASE_URL } from '@/settings/origin';

const loading = ref(false);
const finished = ref(false);
const list = ref([]);

let page = 1;

async function load() {
  const { total, data } = await getQuotationList({ limit: 10, page });
  list.value = list.value.concat(
    data.map(item => ({
      ...item,
      poster: `${BASE_URL}${item.poster}`,
    }))
  );
  console.log(list.value);
  loading.value = false;
  if (list.value.length >= total) {
    finished.value = true;
    return;
  }
  page++;
}
</script>

<template>
  <var-list :finished="finished" v-model:loading="loading" @load="load">
    <var-cell :key="item.id" v-for="item in list">
      <var-card
        :title="item.title"
        :subtitle="item.desc"
        layout="row"
        class="item-card"
        @click="$router.push({ name: 'learnQuotes', query: { id: item.id } })"
        ripple
      >
        <template #extra>
          <var-space :size="[8, 8]">
            <var-button text round disabled>
              <p>{{ item.create_time }}</p>
            </var-button>
            <var-badge type="warning" :value="item.click_count" :max-value="99">
              <var-button text round disabled>
                <var-icon name="view" />
              </var-button>
            </var-badge>
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
