import request from '@/utils/request';

export const getCourseList = params =>
  request({
    method: 'GET',
    url: '/study/party/lecture/list',
    params,
  });

export const getCourseDetail = id =>
  request({
    method: 'GET',
    url: '/study/party/lecture/find',
    params: {
      id,
    },
  });

export const fetchCourseClickCount = id =>
  request({
    method: 'POST',
    url: '/study/party/lecture/update-click',
    data: {
      id,
    },
  });

export const fetchCourseStarCount = id =>
  request({
    method: 'POST',
    url: '/study/party/lecture/update-star',
    data: {
      id,
    },
  });

export const fetchCourseCollectCount = id =>
  request({
    method: 'POST',
    url: '/study/party/lecture/update-collect',
    data: {
      id,
    },
  });
