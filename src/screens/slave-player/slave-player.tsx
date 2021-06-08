import * as React from 'react';
import {Image, Line, Text, View} from '@components';
import {TActiveSound} from '@typings';
import {styles} from './styles';
import database from '@react-native-firebase/database';
import Images from '@images';
import {getPlayerActions} from '@helpers';

const SlavePlayer = () => {
  const [activeSound, setActiveSound] = React.useState<TActiveSound>(null);

  React.useEffect(() => {
    getPlayerActions(activeSound?.action, activeSound);
  }, [activeSound?.action]);

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

  const ending = activeSound?.action === 'pause' ? 'd' : 'ed';

  return (
    <View style={styles.container}>
      <Text h2>{activeSound?.audio?.name}</Text>
      {activeSound?.action === 'play' ? (
        <Image source={Images.MUSIC} style={styles.image} />
      ) : (
        <Line marginVertical={140} />
      )}
      <Text>
        Currently {activeSound?.action}
        {ending}
      </Text>
    </View>
  );
};
export default SlavePlayer;
