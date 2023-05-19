import request from '@/utils/request';

export const getHistoryList = params =>
  request({
    method: 'GET',
    url: '/study/party/history/list',
    params,
  });

export const getHistoryDetail = id =>
  request({
    method: 'GET',
    url: '/study/party/history/find',
    params: {
      id,
    },
  });

export const fetchHistoryClickCount = id =>
  request({
    method: 'POST',
    url: '/study/party/history/clickCount',
    data: {
      id,
    },
  });

export const fetchHistoryStarCount = id =>
  request({
    method: 'POST',
    url: '/study/party/history/starCount',
    data: {
      id,
    },
  });

export const fetchHistoryCollectCount = id =>
  request({
    method: 'POST',
    url: '/study/party/history/collectCount',
    data: {
      id,
    },
  });
