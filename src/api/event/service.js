import { request } from '@/utils/request';

export const getServiceList = params =>
  request({
    method: 'GET',
    url: '/event/service/list',
    params,
  });

export const getServiceDetail = params =>
  request({
    method: 'GET',
    url: '/event/service/one',
    params,
  });

export const fetchJoinService = ({ id, userId }) =>
  request({
    method: 'POST',
    url: '/event/service/join',
    data: {
      id,
      userId,
    },
  });

export const fetchCancelService = id =>
  request({
    method: 'POST',
    url: '/event/service/cancel',
    data: {
      id,
    },
  });
