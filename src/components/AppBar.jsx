import React from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';

import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { useApolloClient } from '@apollo/client';

import { GET_ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

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
  const { data, loading } = useQuery(GET_ME);
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  
  const handleSignOut = () => {
    authStorage.removeAccessToken();
    client.resetStore();
  };
  
  if(loading) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.item}>Repositories</Text>
        </Link>
        { data.me ? (
          <Pressable onPress={handleSignOut}>
            <Text style={styles.item}>Sign out</Text>
          </Pressable>
          ) : (
          <Link to="/signin">
            <Text style={styles.item}>Sign in</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;