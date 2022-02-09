import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { useNavigate } from 'react-router-native';

import { Formik } from 'formik';
import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';
import useSignUp from '../hooks/useSignUp';
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
  signUp: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borders.radiusRectangle,
    textAlign: 'center',
    margin: 5,
    padding: 13
  },
});

const validationSchema = yup.object().shape({
  username: yup.string()
    .max(30, 'Username too long')
    .required('Username required'),
  password: yup.string()
    .min(5, 'Password too short')
    .max(50, 'Password too long')
    .required('Password required'),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation required'),
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      await signUp(values);
      await signIn(values);
      navigate('/', { replace: true });
    } catch (e) {
      console.log(e);
    }
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
        <FormikTextInput
          style={styles.input}
          name="passwordConfirmation" 
          placeholder="Password confirmation"
          secureTextEntry
        />
        <Pressable onPress={handleSubmit}>
          <Text color="textButton" style={styles.signUp}>
            Sign up
          </Text>
        </Pressable>
      </View>
      )}
    </Formik>
  );
};

export default SignUp;