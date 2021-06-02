import {Pressable} from '@components';
import React from 'react';
import styles from './styles';

type TProps = {
  children: React.ReactNode;
  onPress: () => void;
};

export const Button = ({children, onPress}: TProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {children}
    </Pressable>
  );
};
