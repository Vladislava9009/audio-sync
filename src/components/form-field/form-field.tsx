import {TextInput, Text} from '@components';
import React from 'react';
import {TextInputProps} from 'react-native';
import {styles} from './form-field.style';

type TProps = {
  label?: string;
  onBlur: () => void;
};

export const FormField = ({label, ...props}: TProps) => {
  return (
    <>
      <Text>{label}</Text>
      <TextInput {...props} style={styles.container} />
    </>
  );
};
