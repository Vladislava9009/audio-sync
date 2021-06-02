import {TUserStore} from '@typings';
import {useLocalObservable} from 'mobx-react';
import React from 'react';
import {createUserStore} from './userStore';

const UserContext = React.createContext<any>(null);

type TProps = {
  children: React.ReactNode;
};

export const NotesProvider = ({children}: TProps) => {
  const userStore = useLocalObservable<Record<string, TUserStore>>(
    createUserStore as any,
  );

  return (
    <UserContext.Provider value={userStore}>{children}</UserContext.Provider>
  );
};

export const useUserStore = () => React.useContext(UserContext);
