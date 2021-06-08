import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {TUser, TUserStore} from '@typings';
import {runInAction} from 'mobx';
import {useLocalObservable} from 'mobx-react';
import React, {useEffect} from 'react';
import {createUserStore} from './userStore';

const UserContext = React.createContext<any>(null);

type TProps = {
  children: React.ReactNode;
};

export const NotesProvider = ({children}: TProps) => {
  let userUpdated = {};
  const userStore = useLocalObservable<Record<string, TUserStore>>(
    createUserStore as any,
  );
  const onAuthStateChanged = (user: any) => {
    user
      ? user.getIdTokenResult().then((idTokenResult: any) => {
          user.superAdmin = idTokenResult.claims.superAdmin;
          userUpdated = {...user, admin: idTokenResult.claims.admin};
          runInAction(() => {
            userStore.user = {...user, admin: idTokenResult.claims.admin};
          });
        })
      : runInAction(() => {
          userStore.user = user;
        });
  };
  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
  }, []);

  return (
    <UserContext.Provider value={userStore}>{children}</UserContext.Provider>
  );
};

export const useUserStore = () => React.useContext(UserContext);
