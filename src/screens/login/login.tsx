import * as React from 'react';
import {ScrollView, Text, FormField, Button, Field, Form} from '@components';
import api from '@services';
import {useUserStore, observer} from '@store';
import {RouteProp, StackNavigationProp, TScreenParams} from '@typings';
import auth from '@react-native-firebase/auth';

import {styles} from './login.style';

const LoginScreen: React.FC<TProps> = observer(() => {
  const {user} = useUserStore();

  const onSubmit = (form: any) => {
    console.log(form);
    api.signUp(form);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Form onSubmit={onSubmit}>
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
});

type TProps = {
  navigation: StackNavigationProp<TScreenParams, 'Login'>;
  route: RouteProp<TScreenParams, 'Login'>;
};

export default LoginScreen;
