import * as React from 'react';
import {ScrollView, Text, FormField, Button, Field, Form} from '@components';
import api from '@services';
import {RouteProp, StackNavigationProp, TScreenParams} from '@typings';

import {styles} from './login.style';

const LoginScreen: React.FC<TProps> = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Form onSubmit={api.signUp}>
        {({handleSubmit, submitting, pristine}) => (
          <>
            <Field name="email">
              {({input, meta}) => <FormField label="Email" {...input} />}
            </Field>
            <Field name="password">
              {({input, meta}) => <FormField label="Password" {...input} />}
            </Field>
            <Button onPress={handleSubmit}>
              <Text>Login</Text>
            </Button>
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
