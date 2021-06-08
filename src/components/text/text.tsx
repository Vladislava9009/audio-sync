import * as React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {RNETextProps, TEvent} from '@typings';
import {RNEText} from '@components';
import {styles} from './styles';

const Text: React.FC<TProps> = ({
  style,
  children,
  ellipsizeMode = 'tail',
  ...textProps
}) => {
  const textStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        styles.defaultText,
        {
          paddingTop: Platform.select({
            ios: 3, // vertical centering text for resolve IOS font issue
            android: undefined,
          }),
        },
        style && style,
      ]),
    [style],
  );

  return (
    <RNEText
      style={textStyle}
      h1Style={styles.h1}
      h2Style={styles.h2}
      h3Style={styles.h3}
      h4Style={styles.h4}
      ellipsizeMode={ellipsizeMode}
      {...textProps}
    >
      {children}
    </RNEText>
  );
};

type TProps = RNETextProps & {onTextLayout?: ({nativeEvent}: TEvent) => void};

export default Text;
