import React from 'react';

import { Pressable, SafeAreaView, Text } from 'react-native';

import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

import styles from './styles';

const HomeScreen = (props) => {
  const { navigation } = props;

  const user = useSelector((state: RootState) => state.session.user);

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Hello, {user.name}</Text>
      <Text style={styles.text}>Your email: {user.email}</Text>

      <Pressable style={({ pressed }) => [styles.button, { opacity: pressed ? 0.2 : 1 }]} onPress={navigation.goBack}>
        <Text style={styles.button_name}>Go back</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;
