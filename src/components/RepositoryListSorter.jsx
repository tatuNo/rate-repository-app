import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { List } from 'react-native-paper';

import theme from '../theme';

const styles = StyleSheet.create({
  list: {
    backgroundColor: theme.colors.backgroundColorPrimary,
    margin: 0,
    padding: 0,
  },
});

const titles = {
  latest: 'Latest repositories',
  highest: 'Highest rated repositories',
  lowest: 'Lowest rated repositories',
};

const RepositoryListSorter = ({ setOrder, currentOrder }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  return(
    <List.Section>
      <List.Accordion
        style={styles.list}
        title={titles[currentOrder]}
        left={props => <List.Icon {...props} icon="sort" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item title="Latest repositories" onPress={() => setOrder('latest')}/>
        <List.Item title="Highest rated repositories" onPress={() => setOrder('highest')}/>
        <List.Item title="Lowest rated repositories" onPress={() => setOrder('lowest')}/>
      </List.Accordion>
    </List.Section>
  );
};

export default RepositoryListSorter;