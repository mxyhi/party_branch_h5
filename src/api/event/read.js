import { request } from '@/utils/request';

export const getReadList = params =>
  request({
    method: 'GET',
    url: '/event/read/list',
    params,
  });

export const getReadDetail = params =>
  request({
    method: 'GET',
    url: '/event/read/one',
    params,
  });

export const fetchJoinRead = ({ id, userId }) =>
  request({
    method: 'POST',
    url: '/event/read/join',
    data: {
      id,
      userId,
    },
  });

export const fetchCancelRead = id =>
  request({
    method: 'POST',
    url: '/event/read/cancel',
    data: {
      id,
    },
  });
