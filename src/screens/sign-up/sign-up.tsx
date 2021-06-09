import * as React from 'react';
import {
  Button,
  ErrorBoundary,
  Field,
  Form,
  FormField,
  ScrollView,
  Text,
  Pressable,
} from '@components';
import {StackNavigationProp, RouteProp, TScreenParams} from '@typings';
import {styles} from './styles';
import api from '@services';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@constants';

const hitSlop = {
  top: 12,
  left: 12,
  right: 12,
  botom: 12,
};

const SignUpScreen: React.FC<TProps> = () => {
  const {navigate} = useNavigation();
  const navigateToLogIn = React.useCallback(() => navigate(routes.LOGIN), []);

  return (
    <ErrorBoundary>
      <ScrollView contentContainerStyle={styles.container}>
        <Form onSubmit={api.signUp}>
          {({handleSubmit}) => (
            <>
              <Field name="email">
                {({input}) => <FormField label="Email" {...input} />}
              </Field>
              <Field name="password">
                {({input}) => <FormField label="Password" {...input} />}
              </Field>
              <Button onPress={handleSubmit}>
                <Text>Sign up</Text>
              </Button>
            </>
          )}
        </Form>
        <Pressable onPress={navigateToLogIn} hitSlop={hitSlop}>
          <Text style={styles.buttonText}>
            Already have an account? <Text>Log in</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </ErrorBoundary>
  );
};

type TProps = {
  navigation: StackNavigationProp<TScreenParams, 'SignUp'>;
  route: RouteProp<TScreenParams, 'SignUp'>;
};

export default SignUpScreen;
