import env from 'react-native-config';

export const config = {
  webviewUrl: env.WEBVIEW_URL,
};

console.log('config', config);
