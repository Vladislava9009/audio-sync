import * as Sentry from '@sentry/react-native';
import {config} from '@constants';

const sentryEnabled = !!config.SENTRY_DSN && !__DEV__;
if (sentryEnabled) {
  Sentry.init({
    dsn: config.SENTRY_DSN,
    enabled: sentryEnabled,
    environment: config.ENVIRONMENT,
  });
}

export default Sentry;
