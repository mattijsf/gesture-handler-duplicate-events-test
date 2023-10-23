/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#CCC', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={(): void => {
            console.log('onPress', Date.now());
          }}
          onPressIn={(): void => {
            console.log('onPressIn', Date.now());
          }}>
          <View style={{backgroundColor: '#ff0000', width: 100, height: 100}} />
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}

export default App;
