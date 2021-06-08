import {View, Text, Pressable} from '@components';
import {TAction, TAudio} from '@typings';
import React, {useMemo} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

type TProps = {
  audio: TAudio;
  onPlayerPress: (action: TAction) => void;
  action: TAction;
};

export const Player = ({audio, action, onPlayerPress}: TProps) => {
  const {name} = audio;

  const {icon, onPress} = useMemo(() => {
    switch (action) {
      case 'pause':
        return {
          icon: 'play',
          onPress: () => onPlayerPress('play'),
        };
      case 'stop':
        return {
          icon: 'stop',
          onPress: () => onPlayerPress('stop'),
        };
      default:
        return {
          icon: 'pause',
          onPress: () => onPlayerPress('pause'),
        };
    }
  }, [action]);

  return (
    <>
      <View style={styles.container}>
        <Text>{name}</Text>
        <View style={styles.iconContainer}>
          <Pressable onPress={onPress}>
            <Icon name={icon} size={20} color="#ffffff" />
          </Pressable>
          <Pressable onPress={onPress}>
            <Icon name={'ellipsis-v'} size={20} color="#ffffff" />
          </Pressable>
        </View>
      </View>
    </>
  );
};
