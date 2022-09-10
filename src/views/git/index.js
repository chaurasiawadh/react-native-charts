import React from 'react';
import WebView from 'react-native-webview';

export const Git = ({route}) => {
  return (
    <WebView
      source={{uri: route.params?.url}}
      style={{flex: 1}}
      scalesPageToFit={false}
    />
  );
};
