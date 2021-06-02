import {StackNavigationOptions} from '@react-navigation/stack';

export const routeNavigatorScreenOptions: StackNavigationOptions = {
  headerShown: false,
  animationEnabled: false,
};
export const defaultStackOptions: StackNavigationOptions = {
  // headerStyle: styles.headerStyle,
  // headerTitleStyle: styles.headerTitleStyle,
  // headerTintColor: '#ffffff',
  headerPressColorAndroid: '#C4B36A',
  cardStyle: {backgroundColor: '#ffffff'},
  // headerTitle: props => <HeaderTitle {...props} />,
  headerBackTitleVisible: false,
};
