/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

function FontAwesomeDemo(): React.JSX.Element {
  return (
    <SafeAreaView style={{margin: 5}}>
      <FontAwesomeIcon icon={faCheck} />
    </SafeAreaView>
  );
}

export default FontAwesomeDemo;
