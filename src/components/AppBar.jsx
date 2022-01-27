import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    backgroundColor: '#24292e', /** Theme conf? */
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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.item}>Repositories</Text>
        </Link>
        <Link to="/signin">
          <Text style={styles.item}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;