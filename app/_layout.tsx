import * as Font from 'expo-font';
import { Slot } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect } from 'react';
import './globals.css';


const getFonts = () => {
  return Font.loadAsync({
    'Poppins-Regular': require('@assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('@assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('@assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('@assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('@assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Black': require('@assets/fonts/Poppins-Black.ttf'),
    'Poppins-Light': require('@assets/fonts/Poppins-Light.ttf'),
    'Poppins-ExtraLight': require('@assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Thin': require('@assets/fonts/Poppins-Thin.ttf'),
  })
}



export default function RootLayout() {

  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts
        await getFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);

      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (isReady) {
      SplashScreen.hide()
    }
  }, [isReady])

  if (!isReady) {
    return null; // or a loading indicator
  }

  return <Slot />;
}
