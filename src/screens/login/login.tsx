import * as React from 'react';
import {
  ScrollView,
  Text,
  FormField,
  Button,
  Field,
  Form,
  Pressable,
} from '@components';
import api from '@services';
import {RouteProp, StackNavigationProp, TScreenParams} from '@typings';

import {styles} from './login.style';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@constants';

const hitSlop = {
  top: 12,
  left: 12,
  right: 12,
  botom: 12,
};

const LoginScreen: React.FC<TProps> = () => {
  const {navigate} = useNavigation();
  const navigateToSignUp = React.useCallback(
    () => navigate(routes.SIGN_UP),
    [],
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Form onSubmit={api.signIn}>
        {({handleSubmit, submitting, pristine}) => (
          <>
            <Field name="email">
              {({input}) => <FormField label="Email" {...input} />}
            </Field>
            <Field name="password">
              {({input}) => <FormField label="Password" {...input} />}
            </Field>
            <Button onPress={handleSubmit}>
              <Text>Login</Text>
            </Button>
            <Pressable onPress={navigateToSignUp} hitSlop={hitSlop}>
              <Text style={styles.buttonText}>
                Don't have an account? <Text>Sign up</Text>
              </Text>
            </Pressable>
          </>
        )}
      </Form>
    </ScrollView>
  );
};

type TProps = {
  navigation: StackNavigationProp<TScreenParams, 'Login'>;
  route: RouteProp<TScreenParams, 'Login'>;
};

export default LoginScreen;
