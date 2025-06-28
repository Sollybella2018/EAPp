import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { useLayoutEffect, useContext } from 'react';
import { mockProducts, PRODUCTS } from '../data/mockData';
import ProductItem from '../components/ProductItem';
import { CartContext } from '../context/CartContext'; // ✅ import

function ProductsOverviewScreen({ route, navigation }) {
  const { addToCart } = useContext(CartContext); // ✅ use context
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const selectedCategory = PRODUCTS.find((c) => c.id === catId)?.title || 'Products';
    navigation.setOptions({ title: selectedCategory });
  }, [catId, navigation]);

  const displayProducts = mockProducts.filter(
    (product) => product.category === catId
  );

  function renderProductItem({ item }) {
    return (
      <ProductItem
        {...item}
        onAddToCart={() => {
          addToCart(item); // ✅
          Alert.alert('Success', `${item.title} added to cart.`);
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
      />
    </View>
  );
}

export default ProductsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});



