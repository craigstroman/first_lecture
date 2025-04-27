/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, Image} from 'react-native';

function ScrollViewDemo(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        onScroll={() => console.log('we are now scrolling.')}
        contentContainerStyle={{backgroundColor: 'red', height: 600}}
        showsVerticalScrollIndicator={true}
        horizontal={true}>
        <Image
          source={require('./assets/images/cake.png')}
          style={{width: 500, height: 500}}
        />

        <Image
          source={require('./assets/images/cake.png')}
          style={{width: 500, height: 500}}
        />
        <Image
          source={require('./assets/images/cake.png')}
          style={{width: 500, height: 500}}
        />
        <Image
          source={require('./assets/images/cake.png')}
          style={{width: 500, height: 500}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default ScrollViewDemo;
