/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';

function FlexBoxDemo(): React.JSX.Element {
  return (
    //  If you want them to line up next to each other set the parent view to flexDirection: 'row'
    // justify-contennt determines how items are aligned with the primary axes of the container by default it's set to flex-start
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View style={{flex: 1, backgroundColor: 'yellow', width: 200}}></View>
      <View style={{flex: 2, backgroundColor: 'green', width: 200}}></View>
      <View style={{flex: 3, backgroundColor: 'black'}}></View>
    </View>
  );
}

export default FlexBoxDemo;
