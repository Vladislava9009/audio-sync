import {pause, play, stop} from '@services';
import {TAction, TActiveSound} from '@typings';

export const getPlayerActions = (
  action?: TAction,
  activeSound?: TActiveSound,
) => {
  switch (action) {
    case 'pause':
      return pause();
    case 'stop': {
      return stop();
    }
    case 'play': {
      return activeSound?.audio && play(activeSound?.audio?.url);
    }
    default: {
      return stop();
    }
  }
};
