import {ImageSourcePropType} from 'react-native';

const Images: IHashMap<ImageSourcePropType> = {
  MUSIC: require('./music.gif'),
};
export interface IHashMap<T> {
  [key: string]: T;
}

export default Images;
