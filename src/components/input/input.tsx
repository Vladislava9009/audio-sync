import {TextInput} from '@components';
import React from 'react';
import {TextInputProps} from 'react-native';
import {styles} from './input.style';

type TProps = TextInputProps;

export const Input = (props: TProps) => {
  return <TextInput {...props} style={styles.container} />;
};
