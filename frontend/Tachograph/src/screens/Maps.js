import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const Maps = ({navigation}) => {
  return (
    <>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{}}>
        <View style={{}}>
          <Text>MAPS</Text>
          <Button
            title="Go to Main"
            onPress={() => navigation.navigate('Main')}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Maps;
