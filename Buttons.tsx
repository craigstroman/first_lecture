/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, TextInput, Button} from 'react-native';

function ButtonsDemo(): React.JSX.Element {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  return (
    <SafeAreaView style={{margin: 5}}>
      <TextInput
        keyboardType={'email-address'}
        style={{borderWidth: 1, borderRadius: 4, marginBottom: 10}}
        placeholder="Enter email address"
        onChangeText={value => setEmailValue(value)}
        value={emailValue}
      />
      <TextInput
        secureTextEntry={true}
        style={{borderWidth: 1, borderRadius: 4}}
        placeholder="Enter password"
        onChangeText={value => setPasswordValue(value)}
        value={passwordValue}
      />
      {/* Buttons don't come with a style tag instead you could use the Pressable component */}
      <Button
        title={'Submit'}
        disabled={emailValue.length === 0}
        color={'red'}
        onPress={() => console.log('The button was pressed')}
      />
    </SafeAreaView>
  );
}

export default ButtonsDemo;
