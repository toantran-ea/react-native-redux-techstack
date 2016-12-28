import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';

const App = () => {
  <Provider store={createStore}>
    <View>
      <Header headerText="Tech Stack" />
    </View>
  </Provider>
};

export default App;
