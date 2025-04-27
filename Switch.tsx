/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, Switch, Text, View} from 'react-native';

function SwitchDemo(): React.JSX.Element {
  const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = useState<boolean>(true);
  return (
    <SafeAreaView style={{margin: 5}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Switch
          value={shouldKeepLoggedIn}
          onValueChange={value => setShouldKeepLoggedIn(value)}
        />
        <Text>Keep me logged in</Text>
      </View>
    </SafeAreaView>
  );
}

export default SwitchDemo;
