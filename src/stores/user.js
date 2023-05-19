import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import { removeToken, setToken } from '@/utils/token';
import { removeAccount, setAccount } from '@/utils/account';

export const useUserStore = defineStore('user', () => {
  const token = ref('');
  const account = ref('');
  const uname = ref('');
  const avatar = ref('');
  const desc = ref('');
  const id = ref(0);
  const className = ref('');
  const age = ref(0);
  const phone = ref('');
  const sex = ref(1);

  const reset = () => {
    token.value = '';
    uname.value = '';
    avatar.value = '';
    desc.value = '';
    account.value = '';
    id.value = '';
    className.value = '';
    age.value = 0;
    phone.value = '';
    sex.value = 1;
    removeToken();
    removeAccount();
  };

  const setUserInfo = ({
    userId: rId,
    token: rToken,
    avatar: rAvatar,
    realName: rUname,
    desc: rDesc,
    username: rAccount,
    class: rClassName,
    age: rAge,
    phone: rPhone,
    sex: rSex,
  }) => {
    id.value = rId;
    token.value = rToken;
    uname.value = rUname;
    avatar.value = rAvatar;
    desc.value = rDesc;
    account.value = rAccount;
    className.value = rClassName;
    age.value = rAge;
    phone.value = rPhone;
    sex.value = rSex;
    setToken(token.value);
    setAccount(account.value);
  };

  return {
    id,
    token,
    uname,
    desc,
    account,
    avatar,
    className,
    age,
    phone,
    sex,
    reset,
    setUserInfo,
  };
});
