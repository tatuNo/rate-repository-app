import React from 'react';
import * as yup from 'yup';

import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: theme.colors.backgroundColorSecondary,
    padding: 8,
  },
  input: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: theme.borders.radiusRectangle,
    padding: 8,
    margin: 5,
  },
  signIn: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borders.radiusRectangle,
    textAlign: 'center',
    margin: 5,
    padding: 13
  },
});

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
      <View style={styles.container}>
        <FormikTextInput
          style={styles.input}
          name="username" 
          placeholder="Username" 
        />
        <FormikTextInput
          style={styles.input}
          name="password" 
          placeholder="Password"
          secureTextEntry
        />
        <Pressable onPress={handleSubmit}>
          <Text color="textButton" style={styles.signIn}>
            Sign in
          </Text>
        </Pressable>
      </View>
      )}
    </Formik>
  );
};

export default SignIn;