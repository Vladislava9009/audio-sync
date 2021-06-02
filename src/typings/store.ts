import {TUser} from '@typings';

export type TUserStore = null | {
  user: TUser | null;
  isAuthorized: boolean;
  setUser: (user: TUser) => void;
  deleteUser: () => void;
};
