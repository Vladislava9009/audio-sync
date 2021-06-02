import {TScreenParams} from '@typings';

interface IHashMap<T> {
  [key: string]: T;
}

const routes: IHashMap<any> = Object.freeze({
  // Navigators
  ROOT_NAVIGATOR: 'RootNavigator',
  MAIN_NAVIGATOR: 'MainNavigator',
  AUTH_NAVIGATOR: 'AuthNavigator',
  LOGIN: 'Login',
});

export default routes;
