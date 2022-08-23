import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <WebView
        style={styles.webview}
        source={{uri: 'https://www.google.com/'}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default MainScreen;
