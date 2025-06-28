import { View, Text, Image, StyleSheet, Pressable, Platform, Button } from 'react-native';

function ProductItem({ title, image, description, category, rating, reviews, inStock, onAddToCart }) {
  return (
    <View style={styles.itemContainer}>
      <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => (pressed ? styles.buttonPressed : null)}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.category}>{category.toUpperCase()}</Text>
          <View style={styles.smallDetails}>
            <Text>Rating: {rating}</Text>
            <Text>Reviews: {reviews}</Text>
            <Text>{inStock ? 'In Stock' : 'Out of Stock'}</Text>
          </View>
          {onAddToCart && (
            <Button title="Add to Cart" onPress={onAddToCart} />
          )}
        </View>
      </Pressable>
    </View>
  );
}

export default ProductItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 6,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 6,
  },
  description: {
    fontSize: 14,
    marginVertical: 4,
  },
  category: {
    fontSize: 12,
    color: '#555',
    marginBottom: 8,
  },
  smallDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

