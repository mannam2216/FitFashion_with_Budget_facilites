import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { addItemToCart } from '../redux/actions/Actions';
import { useDispatch } from 'react-redux';


const ProductInfo = () => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  

  useEffect(() => {
    // Fetch product data from AsyncStorage
    getProductData();
  }, []);
  useEffect(()=>{
    console.log(product)
  }, [product])
  const getProductData = async () => {
    try {
      const productData = await AsyncStorage.getItem('product');
      if (productData !== null) {
        setProduct(JSON.parse(productData));
      }
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
    navigation.navigate('Home');
    // Implement your add to cart logic here
    if (product) {
      console.log(`Added ${product.name} to cart`);
    }
  };

  return (
    <View style={styles.container}>
      {product ? (
        <>
          <Image source={product.image} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>Price: ₹ {product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProductInfo;


