import request from '@/utils/request';

export const login = data =>
  request({
    url: '/auth/login',
    data,
    method: 'POST',
  });

export const getUserInfo = uname =>
  request({
    url: `/user/info`,
    params: {
      uname,
    },
  });
  
