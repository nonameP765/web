type Env = 'production' | 'development';

export const APP_ENV: Env =
  process.env.APP_ENV === 'production' ? process.env.APP_ENV : 'development';

export const isProduction = APP_ENV === 'production';
export const isDev = APP_ENV === 'development';
