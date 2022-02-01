import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';

import * as yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

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
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    
    try {
      const data = await signIn({ username, password });
      console.log(data);
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