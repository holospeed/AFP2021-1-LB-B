import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {
  accelerometer,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';
import Speedometer from '../data/Speedometer';

const Main = ({navigation}) => {
  const [speed, setSpeed] = React.useState(0);
  const [speedB, setSpeedB] = React.useState(0);
  const [latLong, setLatLong] = React.useState({latitude: 0, longitude: 0});

  setUpdateIntervalForType(SensorTypes.accelerometer, 1000);
  React.useEffect(() => {
    const subscription = accelerometer.subscribe(({x, y, z, timestamp}) => {
      setSpeed(Speedometer.getVelocityFromAccelerometerData({x, y, z}).speed);

      Geolocation.getCurrentPosition(info => {
        setLatLong({
          latitude: parseFloat(info?.coords?.latitude ?? 0),
          longitude: parseFloat(info?.coords?.longitude ?? 0),
        });
        setSpeedB(info?.coords?.speed ?? 0);
      });

      // console.log(Speedometer.getVelocityFromAccelerometerData({x, y, z}));
    });

    return () => subscription.unsubscribe();
  });

  return (
    <>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{}}>
        <View style={{}}>
          <Text>MAIN</Text>
          <Button
            title="Go to Maps"
            onPress={() => navigation.navigate('Maps')}
          />

          <View style={{margin: 40}}>
            <Text>{speed}</Text>
          </View>

          <View style={{margin: 40}}>
            <Text>{speedB}</Text>
          </View>
          <MapView
            style={{height: 300, width: 420}}
            initialRegion={{
              latitude: latLong.latitude,
              longitude: latLong.longitude,
              latitudeDelta: latLong.latitude,
              longitudeDelta: latLong.longitude,
            }}>
            <Marker
              coordinate={{
                latitude: latLong.latitude,
                longitude: latLong.longitude,
              }}
            />
          </MapView>
          <View style={{margin: 40, flexDirection: 'column'}}>
            <Text style={{flex: 1}}>{latLong.latitude}</Text>
            <Text style={{flex: 1}}>{latLong.longitude}</Text>
          </View>
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

export default Main;
