import request from '@/utils/request';

export const getMessageList = params =>
  request({
    method: 'GET',
    url: '/message/list',
    params,
  });

export const getMessageDetail = id =>
  request({
    method: 'GET',
    url: '/message/detail',
    params: {
      id,
    },
  });

export const addMessage = content =>
  request({
    method: 'POST',
    url: '/message/add',
    data: {
      content,
    },
  });

export const deleteMessage = id =>
  request({
    method: 'POST',
    url: '/message/delete',
    data: {
      id,
    },
  });
