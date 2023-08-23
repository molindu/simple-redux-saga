import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ValueInput from './ValueInput';
import DisplayComponent from './DisplayComponent';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, [])
  return (
    <Provider store={store}>
      <ValueInput />
      <DisplayComponent />
    </Provider>
  );
};

export default App;
