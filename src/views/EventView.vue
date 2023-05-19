<script setup>
import Obligation from '@/components/event/Obligation.vue';
import Report from '@/components/event/Report.vue';
import Service from '@/components/event/Service.vue';
import Read from '@/components/event/Read.vue';
import { ref } from 'vue';

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
    <var-tab>义务活动</var-tab>
    <var-tab>报告活动</var-tab>
    <var-tab>服务活动</var-tab>
    <var-tab>读书活动</var-tab>
  </var-tabs>
  <var-tabs-items v-model:active="active">
    <var-tab-item>
      <Obligation />
    </var-tab-item>
    <var-tab-item>
      <Report />
    </var-tab-item>
    <var-tab-item>
      <Service />
    </var-tab-item>
    <var-tab-item>
      <Read />
    </var-tab-item>
  </var-tabs-items>
</template>
