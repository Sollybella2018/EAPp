import { FlatList } from 'react-native';
import ProductGrid from '../components/ProductGrid';
import { mockProducts } from '../data/mockData';

function ProductDetailsScreen({ navigation }) {
  // 1. Extract unique categories from product list
  const uniqueCategories = Array.from(
    new Set(mockProducts.map((product) => product.category))
  ).map((category) => ({
    id: category,
    title: category,
  }));

  // 2. Navigate to ProductsOverview screen with categoryId
  function renderCategoryItem({ item }) {
    function pressHandler() {
      navigation.navigate('ProductsOverview', {
        categoryId: item.id,
      });
    }

    return (
      <ProductGrid
        title={item.title}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={uniqueCategories}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default ProductDetailsScreen;

