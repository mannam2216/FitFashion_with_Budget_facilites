import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { products } from '../Screens/Products'; // Import the product data
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, addToWishlist } from '../redux/actions/Actions';
import ProductItem from '../common/ProductItem';
import SearchItem from '../common/SearchItem';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';




const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const cartData = useSelector(state => state.Reducers2);

  const dispatch = useDispatch();

  // Function to filter products based on search query
  const filterProducts = () => {
    const filtered = products.category.reduce((acc, category) => {
      const filteredData = category.data.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return [...acc, ...filteredData];
    }, []);
    setFilteredProducts(filtered);
  };

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        onSubmitEditing={filterProducts}
      />
      {
       <FlatList
        data={filteredProducts}
        renderItem={({ item, index }) => (
          <SearchItem
                  onPress={() => {
                      // Convert product data to JSON string
                      const jsonProductData = JSON.stringify(item);
                      AsyncStorage.setItem('product', jsonProductData);
                      navigation.navigate('ProductInfo');
                    }}
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
        )}
        keyExtractor={(item, index) => index.toString()}
      /> 
    }
    </View>
  );
};

export default SearchComponent;

/*
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Button } from 'react-native'; // Import Button component
import { products } from '../Screens/Products';
import { useDispatch } from 'react-redux';
import { addItemToCart, addToWishlist } from '../redux/actions/Actions';
import ProductItem from '../common/ProductItem';
import CartItem from '../common/CartItem';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();

  // Function to filter products based on search query
  const filterProducts = () => {
    const filtered = products.category.reduce((acc, category) => {
      const filteredData = category.data.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return [...acc, ...filteredData];
    }, []);
    setFilteredProducts(filtered);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
        <Button title="Search" onPress={filterProducts} /> {/* Search button }
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={({ item, index }) => (
          <CartItem
            onAddWishlist={x => {
              dispatch(addToWishlist(x));
            }}
            item={item}
            onRemoveItem={() => {
              dispatch(removeFromCart(index));
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SearchComponent;

*/