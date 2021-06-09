import {TScreenParams} from '@typings';

interface IHashMap<T> {
  [key: string]: T;
}

const routes: IHashMap<any> = Object.freeze({
  // Navigators
  ROOT_NAVIGATOR: 'RootNavigator',
  MASTER_NAVIGATOR: 'MasterNavigator',
  SLAVE_NAVIGATOR: 'SlaveNavigator',
  AUTH_NAVIGATOR: 'AuthNavigator',
  LOGIN: 'Login',
  SIGN_UP: ' SignUp',
  AUDIO: 'Audio',
  HOME: 'Home',
  SLAVE_PLAYER: 'SlavePlayer',
});

export default routes;
