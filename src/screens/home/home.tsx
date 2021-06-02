import * as React from 'react';
import {ErrorBoundary, ScrollView, Text} from '@components';
import {StackNavigationProp, RouteProp, TScreenParams} from '@typings';

const HomeScreen: React.FC<TProps> = () => {
  // .
  // const { data: myData, fetching, fetched } = useRequest<[], void>({
  // 	request: api.getSomething(),
  // 	onError: (error) => alert.error(error)
  // })
  // const [_, set_] = useGlobal('something')
  // const callSomething = useDispatch('callSomething')

  return (
    <ErrorBoundary>
      <ScrollView keyboardShouldPersistTaps="handled" bounces={false}>
        <Text>HomeScreen</Text>
      </ScrollView>
    </ErrorBoundary>
  );
};

type TProps = {
  navigation: StackNavigationProp<TScreenParams, 'Home'>;
  route: RouteProp<TScreenParams, 'Home'>;
};

export default HomeScreen;
