import {ScrollView, View, Text, Observer, Input, FormField} from '@components';
import {useUserStore} from '@store';
import {TScreenParams} from '@typings';
import * as React from 'react';
import {Field, Form} from 'react-final-form';
import {styles} from './login.style';

const LoginScreen: React.FC<TProps> = () => {
  const userStore = useUserStore();

  const onSubmit = () => {};

  return (
    <View />
    // <ScrollView
    //   contentContainerStyle={styles.container}
    //   keyboardShouldPersistTaps="handled"
    //   bounces={false}>
    //   <Form onSubmit={onSubmit}>
    //     {({handleSubmit, submitting, pristine}) => (
    //       <>
    //         <Field name="email">
    //           {({input, meta}) => <FormField label="Email" {...input} />}
    //         </Field>
    //         <Field name="password">
    //           {({input, meta}) => <FormField label="Password" {...input} />}
    //         </Field>
    //       </>
    //     )}
    //   </Form>
    // </ScrollView>
  );
};

type TProps = {
  // navigation: StackNavigationProp<TScreenParams, 'Login'>
  // route: RouteProp<TScreenParams, 'Login'>
};

export default LoginScreen;
