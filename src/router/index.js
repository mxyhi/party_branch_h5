import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        nav: '首页',
        showBar: true,
      },
    },
    {
      path: '/work/notice',
      name: 'workNotice',
      component: () => import('@/views/WorkView.vue'),
      meta: {
        nav: '工作通知',
        showBar: true,
      },
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('@/views/EventView.vue'),
      meta: {
        nav: '活动管理',
        showBar: true,
      },
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('@/views/AMessageView.vue'),
      meta: {
        showBar: true,
      }
    },
    {
      path: '/message/add',
      name: 'messageAdd',
      component: () => import('@/views/MessageAdd.vue'),
      meta: {
        nav: '新增留言',
      },
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('@/views/LearnView.vue'),
      meta: {
        nav: '学习',
        showBar: true,
      },
    },
    {
      path: '/event/obligation',
      name: 'eventObligation',
      component: () => import('@/views/event/ObligationView.vue'),
      meta: {
        nav: '义务活动',
        showBar: true,
      },
    },
    {
      path: '/learn/course',
      name: 'learnCourse',
      component: () => import('@/views/learn/CourseView.vue'),
      meta: {
        nav: '党课学习',
        showBar: true,
      },
    },
    {
      path: '/learn/quotes',
      name: 'learnQuotes',
      component: () => import('@/views/learn/QuotationView.vue'),
      meta: {
        nav: '红色语录',
        showBar: true,
      },
    },
    {
      path: '/learn/history',
      name: 'learnHistory',
      component: () => import('@/views/learn/HistoryView.vue'),
      meta: {
        nav: '党史学习',
        showBar: true,
      },
    },
    {
      path: '/event/read',
      name: 'eventRead',
      component: () => import('@/views/event/ReadView.vue'),
      meta: {
        nav: '读书活动',
        showBar: true,
      },
    },
    {
      path: '/event/report',
      name: 'eventReport',
      component: () => import('@/views/event/ReportView.vue'),
      meta: {
        nav: '报告活动',
        showBar: true,
      },
    },
    {
      path: '/event/service',
      name: 'eventService',
      component: () => import('@/views/event/ServiceView.vue'),
      meta: {
        nav: '服务活动',
        showBar: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: {
        nav: '登录',
      },
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserView.vue'),
      meta: {
        nav: '我的',
        showBar: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'redirect',
      redirect: '/',
    },
  ],
});

export default router;
