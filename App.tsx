/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {Text, View} from 'react-native';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

function App(): JSX.Element {
  const [pressCount, setPressCount] = useState(0);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', gap: 10}}>
      <Text style={{ color: '#fff' }}>Press Count: {pressCount}</Text>
        <TouchableOpacity onPress={(): void => setPressCount(c => c + 1)}>
          <View style={{backgroundColor: '#ff0000', width: 100, height: 100}} />
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}

export default App;
