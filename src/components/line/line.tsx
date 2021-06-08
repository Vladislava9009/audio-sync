import * as React from 'react';
import {View} from '@components';
import {styles} from './styles';

type TProps = {
  hidden?: boolean;
  marginHorizontal?: number;
  marginVertical?: number;
  height?: number;
};

export const Line = ({
  hidden,
  marginVertical = 24,
  marginHorizontal = 0,
  height = 1,
}: TProps) => {
  return (
    <View style={[styles.line, {marginVertical, marginHorizontal}]}>
      <View style={[styles.line, {height}]} />
    </View>
  );
};
