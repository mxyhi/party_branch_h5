<script setup>
import { ref } from 'vue';
import PartyCourseLearning from '@/components/learn/PartyCourseLearning.vue';
import StudyOfPartyHistory from '@/components/learn/StudyOfPartyHistory.vue';
import QuotationsLearning from '@/components/learn/QuotationsLearning.vue';

const active = ref(0);
</script>

<template>
  <var-tabs
    elevation
    color="white"
    active-color="black"
    inactive-color="#b9b9b9"
    v-model:active="active"
    sticky
    safe-area
  >
    <var-tab>党史学习</var-tab>
    <var-tab>党课学习</var-tab>
    <var-tab>语录学习</var-tab>
  </var-tabs>
  <var-tabs-items v-model:active="active">
    <var-tab-item>
      <StudyOfPartyHistory />
    </var-tab-item>
    <var-tab-item>
      <PartyCourseLearning />
    </var-tab-item>
    <var-tab-item>
      <QuotationsLearning />
    </var-tab-item>
  </var-tabs-items>
</template>
