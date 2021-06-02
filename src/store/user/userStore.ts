import {TUser, TUserStore} from '@typings';

export function createUserStore(): TUserStore {
  return {
    user: null,
    isAuthorized: false,
    setUser(user: TUser) {
      this.user = user;
    },
    deleteUser() {
      this.user = null;
    },
  };
}
