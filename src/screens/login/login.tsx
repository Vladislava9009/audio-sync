import {ScrollView, View, Text} from '@components';
import {TScreenParams} from '@typings';
import * as React from 'react';

import styles from './styles.css';

const LoginScreen: React.FC<TProps> = () => {
  // .
  // const { data: myData, fetching, fetched } = useRequest<[], void>({
  // 	request: api.getSomething(),
  // 	onError: (error) => alert.error(error)
  // })
  // const [_, set_] = useGlobal('something')
  // const callSomething = useDispatch('callSomething')

  return (
    <ScrollView keyboardShouldPersistTaps="handled" bounces={false}>
      <Text>LoginScreen</Text>
    </ScrollView>

    // <ErrorBoundary>
    // 	<ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps="handled" bounces={false}>
    // 		<Text>LoginScreen</Text>
    // 	</ScrollView>
    // </ErrorBoundary>
  );
};

type TProps = {
  // navigation: StackNavigationProp<TScreenParams, 'Login'>
  // route: RouteProp<TScreenParams, 'Login'>
};

export default LoginScreen;
