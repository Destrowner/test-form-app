import React from 'react';

import { SafeAreaView, View, Text, Image } from 'react-native';

import AuthForm from '../../components/auth-form';

import styles from './styles';

const FormScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Test form</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Text>

      <View style={styles.image_container}>
        <Image source={require('../../assets/images/main.png')} style={styles.image} resizeMode="contain" />
      </View>

      <AuthForm />
    </SafeAreaView>
  );
};

export default FormScreen;
