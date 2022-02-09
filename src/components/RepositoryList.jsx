import  React, { useState } from 'react';
import { FlatList } from 'react-native';

import { useDebounce } from 'use-debounce';

import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';
import RepositoryListSorter from './RepositoryListSorter';
import SearchBar from './SearchBar';


export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { setOrder, currentOrder, searchQuery, setSearchQuery } = this.props;

    return (
      <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <RepositoryListSorter currentOrder={currentOrder} setOrder={setOrder} />
      </>
    );
  };

  render() {
    const { repositories, onEndReach } = this.props;

    const repositoryNodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : [];

    const renderItem = ({ item }) => (
      <RepositoryItem repository={item} />
    );

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const orders = {
  latest: {
    orderBy: 'CREATED_AT', 
    orderDirection: 'DESC'
  },
  highest: {
    orderBy: 'RATING_AVERAGE', 
    orderDirection: 'DESC'
  },
  lowest: {
    orderBy: 'RATING_AVERAGE', 
    orderDirection: 'ASC'
  },
};

const RepositoryList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchKeyword] = useDebounce(searchQuery, 500);
  const [order, setOrder] = useState('latest');

  const { repositories, fetchMore } = useRepositories({
    searchKeyword,
    first: 10,
    ...orders[order],
  });

  const onEndReach = () => {
    fetchMore();
  };

  return ( 
    <RepositoryListContainer 
      repositories={repositories} 
      setOrder={setOrder} 
      currentOrder={order}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;