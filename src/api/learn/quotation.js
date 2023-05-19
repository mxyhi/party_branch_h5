import request from '@/utils/request';

export const getQuotationList = params =>
  request({
    method: 'GET',
    url: '/study/party/quotes/list',
    params,
  });

export const getQuotationDetail = id =>
  request({
    method: 'GET',
    url: '/study/party/quotes/find',
    params: {
      id,
    },
  });

export const fetchQuotationClickCount = id =>
  request({
    method: 'POST',
    url: '/study/party/quotes/update-click',
    data: {
      id,
    },
  });

export const fetchQuotationStarCount = id =>
request({
  method: 'POST',
  url: '/study/party/quotes/update-star',
  data: {
    id,
  },
});

export const fetchQuotationCollectCount = id =>
request({
  method: 'POST',
  url: '/study/party/quotes/update-collect',
  data: {
    id,
  },
});
