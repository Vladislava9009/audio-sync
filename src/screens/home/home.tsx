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
import api, {pause, pickFile, play} from '@services';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen: React.FC<TProps> = () => {
  const [audioList, setAudioList] = React.useState<TAudio[]>([]);
  const [activeSound, setActiveSound] = React.useState<{
    audio: TAudio;
    action: TAction;
  } | null>(null);
  console.log(activeSound, 'activeSound');

  React.useEffect(() => {
    getAudioList();
  }, []);

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
    } catch (er) {
      console.log(er);
    }
  };
  const onPlayerPress = (action: TAction) => {
    activeSound && setActiveSound({...activeSound, action});
    switch (action) {
      case 'pause':
        return pause();
      case 'stop': {
        return stop();
      }
      default: {
        return activeSound?.audio && play(activeSound?.audio?.url);
      }
    }
  };
  return (
    <ErrorBoundary>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.audioListContainer}>
          {audioList.map(audio => {
            const onItenPress = () => {
              setActiveSound({audio, action: 'play'});
            };
            return (
              <ListItem key={audio.url} bottomDivider onPress={onItenPress}>
                <Icon name={'assistive-listening-systems'} size={20} />
                <ListItem.Content>
                  <ListItem.Title>{audio.name}</ListItem.Title>
                </ListItem.Content>
                <Icon name={'ellipsis-v'} onPress={console.log} />
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
