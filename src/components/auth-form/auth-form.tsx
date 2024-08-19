import React from 'react';

import { TextInput, KeyboardAvoidingView, Pressable, Text } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import LinearGradient from 'react-native-linear-gradient';

import { setUser, UserState } from '../../store/slices/session-slice';

import RULES from '../../constants/rules';
import COLORS from '../../constants/colors';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const AuthForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = (data: UserState) => {
    dispatch(setUser({ user: data }));

    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Controller
        control={control}
        rules={RULES.EMAIL}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.email && styles.input_error]}
            value={value}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Email"
            placeholderTextColor={COLORS.INPUT_PLACEHOLDER}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        rules={RULES.NAME}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.name && styles.input_error]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            placeholder="Name"
            placeholderTextColor={COLORS.INPUT_PLACEHOLDER}
          />
        )}
        name="name"
      />

      <Pressable
        style={({ pressed }) => [styles.button, { opacity: pressed ? 0.2 : 1 }]}
        onPress={handleSubmit(onSubmit)}
      >
        <LinearGradient
          colors={COLORS.BUTTON_BACKGROUND_GRADIENT}
          locations={[0, 0.85, 1]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.button_gradient}
        >
          <Text style={styles.button_name}>Apply</Text>
        </LinearGradient>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default AuthForm;
