import React from 'react';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';
import Routs from './src/Roots';

const App = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar />
      <View style={styles.mainView}>
        <Routs />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});

export default App;
