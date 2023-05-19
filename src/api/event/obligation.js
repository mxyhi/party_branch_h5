import { request } from '@/utils/request';

export const getObligationList = params =>
  request({
    method: 'GET',
    url: '/event/obligation/list',
    params,
  });

export const getObligationDetail = params =>
  request({
    method: 'GET',
    url: '/event/obligation/one',
    params,
  });

export const fetchJoinObligation = ({ id, userId }) =>
  request({
    method: 'POST',
    url: '/event/obligation/join',
    data: {
      id,
      userId,
    },
  });

export const fetchCancelObligation = id =>
  request({
    method: 'POST',
    url: '/event/obligation/cancel',
    data: {
      id,
    },
  });
