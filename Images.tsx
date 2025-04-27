/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Image} from 'react-native';

function ImagesDemo(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Image
        source={require('./assets/images/cake.png')}
        style={{width: 100, height: 100}}
        resizeMode={'contain'}
      />
      <Image
        source={{
          uri: 'https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice.jpg',
        }}
        style={{width: 100, height: 100}}
        resizeMode={'stretch'}
      />
    </SafeAreaView>
  );
}

export default ImagesDemo;
