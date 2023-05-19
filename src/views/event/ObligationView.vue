<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  getObligationDetail,
  fetchCancelObligation,
  fetchJoinObligation,
} from '@/api/event/obligation';
import { BASE_URL } from '@/settings/origin';
import { useUserStore } from '@/stores/user';

const { id: userId } = useUserStore();

const route = useRoute();
const router = useRouter();

const eventId = route.query.id;
const participateInId = route.query.participateInId;

if (!eventId && !participateInId) {
  router.replace({ name: 'home' });
}

const data = ref({});
getObligationDetail({ eventId, participateInId })
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

const joinEvent = (e, item) => {
  e.stopPropagation();
  if (item.isParticipateIn) {
    fetchCancelObligation(item.registrationInformation.id).then(res => {
      console.log(res);
      item.isParticipateIn = false;
      item.registrationInformation = res;
    });
  } else {
    fetchJoinObligation({ id: item.id, userId }).then(res => {
      console.log(res);
      item.isParticipateIn = true;
      item.registrationInformation = res;
    });
  }
};
console.log(data.value);
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
          <div>
            <var-button text round disabled>
              <p>活动人数：{{ data.people_count }}</p>
            </var-button>
            <var-button
              @click="joinEvent($event, data)"
              :type="data.isParticipateIn ? 'success' : 'warning'"
            >
              {{ data.isParticipateIn ? '已报名' : '报名' }}
            </var-button>
          </div>
          <div>
            <var-button text round disabled>
              <p>活动地点：{{ data.address }}</p>
            </var-button>
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
