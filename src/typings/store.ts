import {TUser} from '@typings';

export type TUserStore = null | {
  user: TUser;
  isAuthorized: boolean;
  setUser: (user: TUser) => void;
  deleteUser: () => void;
};
