import SoundPlayer from 'react-native-sound-player';

export const play = async (url: string) => {
  try {
    SoundPlayer.playUrl(url);
  } catch (e) {
    console.log(`cannot play the sound file`, e);
  }
};

export const pause = async () => {
  try {
    SoundPlayer.pause();
  } catch (e) {
    console.log(`cannot pause the sound file`, e);
  }
};

export const stop = async () => {
  try {
    SoundPlayer.stop();
  } catch (e) {
    console.log(`cannot pause the sound file`, e);
  }
};
