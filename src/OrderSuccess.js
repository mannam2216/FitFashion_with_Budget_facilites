import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {removeFromCart} from '../src/redux/actions/Actions';


const OrderSuccess = () => {
  const orders = useSelector(state => state.OrderReducers);
  const [product, setProduct] = useState();
  const dispatch = useDispatch();  
  // console.log(orders);
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={
          route.params.status == 'success'
            ? require('./images/check.png')
            : require('./images/failed.png')
        }
        style={{width: 50, height: 50}}
      />
      <Text style={{marginTop: 20, fontSize: 20}}>
        {route.params.status == 'success'
          ? 'Your Order Placed Sucessfully !'
          : 'Order Failed'}
      </Text>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0.6,
        }}
        onPress={() => {
          dispatch(removeFromCart(product));
          navigation.navigate('Home');
          
          // console.log("clicked");
        }}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSuccess;


// import {View, Text, Image, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {useSelector} from 'react-redux';
// import {useNavigation, useRoute} from '@react-navigation/native';

// const OrderSuccess = () => {
//   const orders = useSelector(state => state.OrderReducers);
//   console.log(orders);
//   const route = useRoute();
//   const navigation = useNavigation();
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Image
//         source={
//           route.params.status == 'success'
//             ? require('./images/check.png')
//             : require('./images/failed.png')
//         }
//         style={{width: 50, height: 50}}
//       />
//       <Text style={{marginTop: 20, fontSize: 20}}>
//         {route.params.status == 'success'
//           ? 'Your Order Placed Sucessfully !'
//           : 'Order Failed'}
//       </Text>
//       <TouchableOpacity
//         style={{
//           width: 200,
//           height: 50,
//           marginTop: 50,
//           justifyContent: 'center',
//           alignItems: 'center',
//           borderWidth: 0.6,
//         }}
//         onPress={() => {
//           navigation.navigate('Home');
//         }}>
//         <Text>Go to Home</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default OrderSuccess;
