// ----------------------------------------------------------
const isProduction = false; // 	<== SET YOUR ENVIRONMENT HERE
// ----------------------------------------------------------

type TEnvironment = 'production' | 'staging';
const ENVIRONMENT: TEnvironment = isProduction ? 'production' : 'staging';

export default Object.freeze({
  ENVIRONMENT,
  SENTRY_DSN:
    'https://bc2b1ab48ce447878f2d4f3f765d00aa@o774365.ingest.sentry.io/5796294',
});
