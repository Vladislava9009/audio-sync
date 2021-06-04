import * as React from 'react';
import {Button, ErrorBoundary, ScrollView, Text, View} from '@components';
import {StackNavigationProp, RouteProp, TScreenParams, TAudio} from '@typings';
import {styles} from './styles';
import api, {pickFile} from '@services';

const HomeScreen: React.FC<TProps> = () => {
  const [audioList, setAudioList] = React.useState<TAudio[]>([]);

  React.useEffect(() => {
    getAudioList();
  }, []);

  const getAudioList = async () => {
    try {
      const audioList: any = await api.getAudioList();
      setAudioList(audioList);
      console.log(audioList, 'audioList');
    } catch (er) {
      console.log(er);
    }
  };

  const uploadAudio = async () => {
    try {
      const audio = await pickFile();
      console.log(audio);
      api.uploadAudio(audio);
    } catch (er) {
      console.log(er);
    }
    // api.uploadAudio(pickFile())
  };

  return (
    <ErrorBoundary>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.audioListContainer} />
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
