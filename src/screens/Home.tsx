/* eslint-disable prettier/prettier */
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

import ProductItem from '../components/ProductItem';
import Separator from '../components/Separator';

import {PRODUCTS_LIST} from '../data/constants';

type Homeprops = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Homeprops) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {
                product: item,
              });
            }}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#000000',
  },
});

export default Home;
