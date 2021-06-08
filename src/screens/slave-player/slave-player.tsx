import * as React from 'react';
import {Image, Line, Text, View} from '@components';
import {
  StackNavigationProp,
  RouteProp,
  TScreenParams,
  TAudio,
  TAction,
  TActiveSound,
} from '@typings';
import {styles} from './styles';
import database from '@react-native-firebase/database';
import Images from '@images';

const SlavePlayer = () => {
  const [activeSound, setActiveSound] = React.useState<TActiveSound>(null);

  React.useEffect(() => {
    database()
      .ref('/activeAudio')
      .on('value', snapshot => {
        setActiveSound(snapshot.val());
        console.log('User data: ', snapshot.val());
      });
  }, []);
  const activeSoundRef = database().ref('activeAudio');

  activeSoundRef.on('child_changed', async snapshot => {
    const data = await snapshot.val();
    setActiveSound(data);
  });

  console.log(activeSound, 'activeSound');

  return (
    <View style={styles.container}>
      <Text h2>{activeSound?.audio?.name}</Text>
      {activeSound?.action === 'play' ? (
        <Image source={Images.MUSIC} style={styles.image} />
      ) : (
        <Line marginVertical={140} />
      )}
      <Text>Currently {activeSound?.action}d</Text>
    </View>
  );
};
export default SlavePlayer;
