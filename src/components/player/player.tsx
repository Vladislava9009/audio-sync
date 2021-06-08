import {TextInput, View, Text, Pressable, Image} from '@components';
import Images from '@images';
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
        break;
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
      {/* <Image source={Images.MUSIC} style/> */}
      <View style={styles.container}>
        <Text>{name}</Text>
        <View style={styles.iconContainer}>
          <Pressable onPress={onPress}>
            <Icon name={icon} size={20} />
          </Pressable>
          <Pressable onPress={onPress}>
            <Icon name={'ellipsis-v'} size={20} />
          </Pressable>
        </View>
      </View>
    </>
  );
};
