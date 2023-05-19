<script setup>
import { ref } from 'vue';
import {
  getReportList,
  fetchCancelReport,
  fetchJoinReport,
} from '@/api/event/report';
import { BASE_URL } from '@/settings/origin';
import { useUserStore } from '@/stores/user';

const { id: userId } = useUserStore();
const loading = ref(false);
const finished = ref(false);
const list = ref([]);

let page = 1;

async function load() {
  const { total, data } = await getReportList({ page, id: userId, limit: 10 });
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

const joinEvent = (e, item) => {
  e.stopPropagation();
  if (item.isParticipateIn) {
    fetchCancelReport(item.registrationInformation.id).then(res => {
      console.log(res);
      item.isParticipateIn = false;
      item.registrationInformation = res;
    });
  } else {
    fetchJoinReport({ id: item.id, userId }).then(res => {
      console.log(res);
      item.isParticipateIn = true;
      item.registrationInformation = res;
    });
  }
};
</script>

<template>
  <var-list :finished="finished" v-model:loading="loading" @load="load">
    <var-cell :key="item.id" v-for="item in list">
      <var-card
        :title="item.title"
        :subtitle="item.desc"
        :src="item.poster"
        layout="row"
        class="item-card"
        @click="
          $router.push({
            name: 'eventReport',
            query: {
              id: item.id,
              participateInId: item.registrationInformation?.id,
            },
          })
        "
        ripple
      >
        <template #extra>
          <var-space :size="[8, 8]">
            <var-button
              @click="joinEvent($event, item)"
              :type="item.isParticipateIn ? 'success' : 'warning'"
            >
              {{ item.isParticipateIn ? '已报名' : '报名' }}
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
