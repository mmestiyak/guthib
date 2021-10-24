import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import ApiContextProvider from './src/contexts/ApiContext';
import MyNavigationContainer from './src/routes';


const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
      <ApiContextProvider>
        <MyNavigationContainer/>
      </ApiContextProvider>

  )

}

export default App;