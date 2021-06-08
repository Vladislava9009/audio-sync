import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';

export const uploadAudio = async (audio: any) => {
  const blob: any = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.onerror = e => {
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', audio.uri, true);
    xhr.send(null);
  });
  const ref = storage()
    .ref()
    .child(`audio/${audio.name}`);
  ref
    .put(blob)
    .then(async snapshot => {
      const fullUrl = await snapshot.ref.getMetadata;
      // Upload the Url to Firebase realtime database...
      console.log('Upload Successful');
    })
    .catch(error => {
      console.log(error.serverResponse);
      console.log('Failed to create object!');
    })
    .finally(() => {
      blob.close();
      // this.setState({ uploading: false });
    });
};

export const getAudioList = async () => {
  const imageRefs = await storage()
    .ref()
    .child('audio/')
    .listAll();
  const data = await Promise.all(
    imageRefs.items.map(async ref => {
      const audio = {
        url: await ref.getDownloadURL(),
        meta: await ref.getMetadata(),
        name: ref.name,
      };
      return audio;
    }),
  );
  return data;
};

export const setActiveAudio = async (data: any) => {
  database()
    .ref('/activeAudio')
    .set(data)
    .then(() => console.log('Data set.'));
};
