import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import api from '../api/post'
import useAxiosFetch from '../hooks/useAxiosFetch'

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');
  const navigate = useNavigate();

  // Loading the data
  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredPosts = posts.filter(post =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

      setSearchResults(filteredPosts.reverse());
  }, [posts, search])

  return (
    <DataContext.Provider value={{
      search, setSearch, navigate, api,
      searchResults, fetchError, isLoading,
      posts, setPosts
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;