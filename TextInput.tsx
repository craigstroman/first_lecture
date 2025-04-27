/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';

function TextInputDemo(): React.JSX.Element {
  const [textValue, setTextValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  return (
    <SafeAreaView>
      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        placeholder="Your Name"
        value={textValue}
        autoFocus={true}
        onChangeText={value => setTextValue(value)}
      />

      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        placeholder="Enter a password"
        value={passwordValue}
        autoFocus={true}
        secureTextEntry={true}
        keyboardType={'default'}
        onChangeText={value => setPasswordValue(value)}
      />

      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        placeholder="Enter a email"
        value={emailValue}
        autoFocus={true}
        keyboardType={'email-address'}
        onChangeText={value => setEmailValue(value)}
      />

      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        placeholder="Enter a email"
        value={emailValue}
        autoFocus={true}
        keyboardType={'email-address'}
        onChangeText={value => setEmailValue(value)}
        returnKeyType={'done'}
      />

      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        placeholder="Enter a email"
        value={emailValue}
        autoFocus={true}
        keyboardType={'email-address'}
        onChangeText={value => setEmailValue(value)}
        returnKeyType={'go'}
      />

      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        placeholder="Enter a number"
        value={numberValue}
        autoFocus={true}
        keyboardType={'phone-pad'}
        onChangeText={value => setNumberValue(value)}
      />
    </SafeAreaView>
  );
}

export default TextInputDemo;
