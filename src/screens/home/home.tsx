import * as React from 'react';
import {
  Button,
  ErrorBoundary,
  Player,
  ScrollView,
  Text,
  View,
} from '@components';
import {
  StackNavigationProp,
  RouteProp,
  TScreenParams,
  TAudio,
  TAction,
} from '@typings';
import {styles} from './styles';
import api, {pickFile} from '@services';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getPlayerActions} from '@helpers';

const HomeScreen: React.FC<TProps> = () => {
  const [audioList, setAudioList] = React.useState<TAudio[]>([]);
  const [activeSound, setActiveSound] = React.useState<{
    audio: TAudio;
    action: TAction;
  } | null>(null);

  React.useEffect(() => {
    getAudioList();
  }, []);

  React.useEffect(() => {
    getPlayerActions(activeSound?.action, activeSound);
  }, [activeSound?.action]);

  const getAudioList = async () => {
    try {
      const audioList: any = await api.getAudioList();
      setAudioList(audioList);
    } catch (er) {
      console.log(er);
    }
  };

  const uploadAudio = async () => {
    try {
      const audio = await pickFile();
      api.uploadAudio(audio);
      getAudioList();
    } catch (er) {
      console.log(er);
    }
  };

  const onPlayerPress = async (action: TAction) => {
    const data = {...activeSound, action};
    activeSound && setActiveSound(data as any);
    try {
      await api.setActiveAudio(data);
    } catch (er) {
      console.log(er);
    }
  };
  return (
    <ErrorBoundary>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.audioListContainer}>
          {audioList.map(audio => {
            const onItenPress = async () => {
              await api.setActiveAudio({audio, action: 'play'});
              setActiveSound({audio, action: 'play'});
            };
            return (
              <ListItem
                key={audio.url}
                bottomDivider
                onPress={onItenPress}
                containerStyle={styles.audioItem}
              >
                <Icon
                  name={'assistive-listening-systems'}
                  size={20}
                  color="#ffffff"
                />
                <ListItem.Content>
                  <ListItem.Title style={styles.audioItemTitle}>
                    {audio.name}
                  </ListItem.Title>
                </ListItem.Content>
                <Icon
                  name={'ellipsis-v'}
                  onPress={console.log}
                  color="#ffffff"
                />
              </ListItem>
            );
          })}
        </View>
        {activeSound && (
          <Player {...activeSound} onPlayerPress={onPlayerPress} />
        )}
        <Button onPress={uploadAudio}>
          <Text>Upload new audio</Text>
        </Button>
      </ScrollView>
    </ErrorBoundary>
  );
};

type TProps = {
  navigation: StackNavigationProp<TScreenParams, 'Home'>;
  route: RouteProp<TScreenParams, 'Home'>;
};

export default HomeScreen;
