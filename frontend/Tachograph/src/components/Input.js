import React from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';

const Input = ({
  title,
  inputText = '',
  placeholder = '',
  secureTextEntry = false,
  inputFunc,
}) => {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    if (inputText && inputText.length !== 0) {
      setText(inputText);
    }
  }, []);

  const setValues = value => {
    setText(value);
    inputFunc(value);
  };

  return (
    <View style={{}}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        onChange={value => setValues(value)}
        value={text}
        style={styles.textInput}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderRadius: 20,
    height: 40,
    backgroundColor: 'snow',
    margin: 10,
    borderColor: 'gray',
    borderWidth: 0.3,
  },
  text: {fontSize: 10, color: 'gray', marginLeft: 20, marginTop: 20},
});

export default Input;
