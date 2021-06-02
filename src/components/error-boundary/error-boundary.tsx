import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContext} from '@react-navigation/core';
import {sentry} from '@services';

class ErrorBoundary extends React.Component<TProps> {
  static contextType: React.Context<any> = NavigationContext;
  state = {hasError: false};

  static getDerivedStateFromError(error: Error) {
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: any) {
    const navigation = this.context;
    sentry.setExtra('ErrorBoundary', errorInfo);
    sentry.captureException(error);
    if (navigation.canGoBack) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
    this.props.onError?.();
  }

  render() {
    if (this.state.hasError) {
      return <Text>Something went wrong</Text>;
    }

    return this.props.children;
  }
}

type TProps = {
  onError?: () => void | Promise<void>;
};

export default ErrorBoundary;
