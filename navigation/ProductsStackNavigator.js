import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ProductsOverviewScreen from '../screens/ProuductsOverview';

const Stack = createNativeStackNavigator();

function ProductsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#3f2f25' },
      }}
    >
        
      <Stack.Screen
        name="ProuductsDetail"
        component={ProductDetailsScreen}
        options={{ title: 'All Products' }}
      />
      <Stack.Screen name="ProductsOverview" component={ProductsOverviewScreen} />
    </Stack.Navigator>
  );
}

export default ProductsStackNavigator;
