import request from '@/utils/request';

export const getWorkList = params =>
  request({
    method: 'GET',
    url: '/work/notice/list',
    params,
  });

export const getWorkDetail = id =>
  request({
    method: 'GET',
    url: '/work/notice/findOne',
    params: {
      id,
    },
  });

  export const fetchWorkClickCount = id =>
  request({
    method: 'POST',
    url: '/work/notice/clickCount',
    params: {
      id,
    },
  });

