import { request } from '@/utils/request';

export const getReportList = params =>
  request({
    method: 'GET',
    url: '/event/report/list',
    params,
  });

export const getReportDetail = params =>
  request({
    method: 'GET',
    url: '/event/report/one',
    params,
  });

export const fetchJoinReport = ({ id, userId }) =>
  request({
    method: 'POST',
    url: '/event/report/join',
    data: {
      id,
      userId,
    },
  });

export const fetchCancelReport = id =>
  request({
    method: 'POST',
    url: '/event/report/cancel',
    data: {
      id,
    },
  });
