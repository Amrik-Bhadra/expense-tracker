// import React, { useEffect } from "react";
// import { useFonts } from "expo-font";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import * as SplashScreen from "expo-splash-screen";
// import { Slot } from "expo-router";

// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const [fontsLoaded, fontError] = useFonts({
//     ...Ionicons.font,
//   });

//   useEffect(() => {
//     if (fontsLoaded || fontError) {
//       SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded, fontError]);

//   if (!fontsLoaded && !fontError) {
//     return null;
//   }

//   return (
//     <>
//       <Slot />
//     </>
//   );
// }


import { Stack } from 'expo-router';

// This is where you would get your authentication state from a context provider
// For now, let's hardcode it to true to see the main app.
const isAuthenticated = true;

export default function AppLayout() {
  return (
    <Stack>
      {isAuthenticated ? (
        // Renders the main app content from the (app) folder
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      ) : (
        // Renders the authentication screens from the (auth) folder
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )}
      <Stack.Screen 
        name="addExpenseModal" 
        options={{ 
          presentation: 'modal', 
          headerShown: false 
        }} 
      />
    </Stack>
  );
}