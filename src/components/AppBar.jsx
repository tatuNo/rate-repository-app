import React from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';

import Constants from 'expo-constants';
import { Link, useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

import useAuthStorage from '../hooks/useAuthStorage';
import useCurrentUser from '../hooks/useCurrentUser';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    backgroundColor: '#24292e',
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 0,
  },
  item: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
});

const AppBar = () => {
  const navigate = useNavigate();
  const { user } = useCurrentUser();
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  
  const handleSignOut = () => {
    authStorage.removeAccessToken();
    client.resetStore();
    navigate('/', { replace: true });
  };
  
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.item}>Repositories</Text>
        </Link>
        { user ? (
          <>
          <Link to="/review">
            <Text style={styles.item}>Create review</Text>
          </Link>
          <Link to="/myreviews">
            <Text style={styles.item}>My reviews</Text>
          </Link>
          <Pressable onPress={handleSignOut}>
            <Text style={styles.item}>Sign out</Text>
          </Pressable>
          </>
          ) : (
          <>
          <Link to="/signin">
            <Text style={styles.item}>Sign in</Text>
          </Link>
          <Link to="/signup">
            <Text style={styles.item}>Sign up</Text>
          </Link>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;