export type TAudio = {
  url: string;
  name: string;
};

export type TAction = 'play' | 'stop' | 'pause';

export type TActiveSound = {
  audio: TAudio;
  action: TAction;
} | null;
