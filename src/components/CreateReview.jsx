import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';

import * as yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import useCreateReview from '../hooks/useCreateReview';

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
  create: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borders.radiusRectangle,
    textAlign: 'center',
    margin: 5,
    padding: 13
  },
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: null,
  text: null,
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Name is required'),
  rating: yup.number('Rating must be number')
    .integer('Rating must be integer')
    .min(0, 'Minimum rating 0')
    .max(100, 'Maximum rating 100')
    .required('Rating is required'),
  text: yup.string().optional(),
});

const CreateReview = () => {
  const navigate = useNavigate();
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    try {
      const value = await createReview(values);
      navigate(`/${value.repository.id}`, { replace: true });
    } catch (error) {
      console.log(error);
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
          name="ownerName" 
          placeholder="Repository owner name" 
        />
        <FormikTextInput
          style={styles.input}
          name="repositoryName" 
          placeholder="Repository name"
        />
        <FormikTextInput
          style={styles.input}
          name="rating" 
          placeholder="Rating between 0 and 100"
          keyboardType='numeric'
        />
        <FormikTextInput
          style={styles.input}
          name="text" 
          placeholder="Review"
          multiline
        />
        <Pressable onPress={handleSubmit}>
          <Text color="textButton" style={styles.create}>
            Create Review
          </Text>
        </Pressable>
      </View>
      )}
    </Formik>
  );
};

export default CreateReview;