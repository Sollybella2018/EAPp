import { CartProvider } from './context/CartContext'; // import
import BottomTabsNavigator from './navigation/BottomTabsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { enableScreens } from 'react-native-screens';  

enableScreens();

export default function App() {
  return (
    <CartProvider>
      <StatusBar style="dark" />
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}


