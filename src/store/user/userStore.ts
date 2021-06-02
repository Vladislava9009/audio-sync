import {TUser, TUserStore} from '@typings';

export function createUserStore(): TUserStore {
  return {
    user: null as TUser | null,
    isAuthorized: false,
    setUser(user: TUser) {
      this.user = user;
    },
    deleteUser() {
      this.user = null;
    },
  };
}
