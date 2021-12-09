import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import Input from '../components/Input';

const Login = ({navigation}) => {
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  return (
    <>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{}}>
        <View style={{}}>
          <Text>LOGIN</Text>
          <Input
            title={'FELHASZNÁLÓ'}
            placeholder="NickName"
            inputFunc={value => setPassword(value)}
            secureTextEntry={false}
          />
          <Input
            title={'JELSZÓ'}
            placeholder="pl: aaaa111"
            inputFunc={value => setUsername(value)}
            secureTextEntry={true}
          />

          <View style={styles.buttonContainer}>
            <Button
              title="BEJELENTKEZÉS"
              onPress={() => navigation.navigate('Main')}
            />
          </View>
          {/* error */}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 60,
  },
});

export default Login;
