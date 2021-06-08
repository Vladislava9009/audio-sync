import auth from '@react-native-firebase/auth';

export const signIn = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  auth().signInWithEmailAndPassword(email, password);
};
export const signUp = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  auth().createUserWithEmailAndPassword(email, password);
};
export const sighOut = () => {
  auth().signOut();
};
