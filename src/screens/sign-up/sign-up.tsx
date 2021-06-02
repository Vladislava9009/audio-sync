import * as React from 'react';
import {ErrorBoundary, ScrollView, Text} from '@components';
import {StackNavigationProp, RouteProp, TScreenParams} from '@typings';
import styles from './styles.css';

const SignUpScreen: React.FC<TProps> = () => {
  // .
  // const { data: myData, fetching, fetched } = useRequest<[], void>({
  // 	request: api.getSomething(),
  // 	onError: (error) => alert.error(error)
  // })
  // const [_, set_] = useGlobal('something')
  // const callSomething = useDispatch('callSomething')

  return (
    <ErrorBoundary>
      <ScrollView>
        <Text>SignUpScreen</Text>
      </ScrollView>
    </ErrorBoundary>
  );
};

type TProps = {
  navigation: StackNavigationProp<TScreenParams, 'SignUp'>;
  route: RouteProp<TScreenParams, 'SignUp'>;
};

export default SignUpScreen;
