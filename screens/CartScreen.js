import { View, Text, FlatList, StyleSheet, Button, SafeAreaView } from 'react-native';
import { useContext, useLayoutEffect } from 'react';
import { CartContext } from '../context/CartContext';
import ProductItem from '../components/ProductItem';

function CartScreen({ navigation }) {
  const { cartItems, removeFromCart } = useContext(CartContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Your Cart 🛒',
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
    });
  }, [navigation]);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function renderCartItem({ item }) {
    return (
      <View style={styles.cartItem}>
        <ProductItem {...item} />
        <View style={styles.buttonContainer}>
          <Button title="Remove" onPress={() => removeFromCart(item.id)} color="#c0392b" />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyText}>🛒 Your cart is empty</Text>
        ) : (
          <>
            <Text style={styles.header}>Cart Items</Text>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.id}
              renderItem={renderCartItem}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
            <Text style={styles.total}>Total: ${totalAmount.toFixed(2)}</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#3f2f25',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flex:1,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    textAlign:'center',
    padding:8
  },
  cartItem: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  buttonContainer: {
    padding: 10,
    alignItems: 'flex-end',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
    marginTop: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
  },
});




