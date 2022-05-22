import './App.css';
import { useState, useEffect } from 'react';

import HandleClick from './HandleClick';
import ChangingColorPage from './ChangingColorPage';
import { Header } from './Header';
import { Footer } from './Footer';
import ItemList from './ItemList';
import AddItem from './AddItem';
import SearchItem from './SearchItem'
import apiRequest from './apiRequest';
import FetchData from './FetchDataAndShowAsTable/FetchData'; 

function App() {

  const API_URL = 'http://localhost:3500/items';
  const shoppingListName = 'shoppingList';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) throw Error('Did not receive data');

        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        console.log(err.stack);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);

  }, [])

  const handleOnCheck = async (id) => {
    const list = items.map((item) => item.id === id
      ? { ...item, checked: !item.checked }
      : item);
    setItems(list);

    const item = list.filter((i) => i.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: item[0].checked })
    };
    const url = `${API_URL}/${id}`;
    const result = await apiRequest(url, updateOptions);
    if (result) setFetchError(result);
  }

  const handleDelete = async (id) => {
    const list = items.filter((item) => item.id !== id);
    setItems(list);

    const deleteOptions = {method: 'DELETE'};
    const url = `${API_URL}/${id}`;
    const result = await apiRequest(url, deleteOptions);
    if (result) setFetchError(result);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItem) return;

    addItem(newItem);
    setNewItem('');
  }

  const addItem = async (name) => {
    const id = items.length
      ? items[items.length - 1].id + 1
      : 1;

      const currentNewItem = {id, checked: false, name: name};
      const listOfItems = [...items, currentNewItem];
      setItems(listOfItems);

      const postOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentNewItem)
      }

      const result = await apiRequest(API_URL, postOptions);
      if (result) setFetchError(result);
  }

  const setAndSaveItemsToLocalStorage = (newItems) => {
    setItems(newItems);
    localStorage.setItem(shoppingListName, JSON.stringify(newItems));
  }

  return (
    <div className='App'>
      <Header title='List of products'/>

      {/* <FetchData /> */}
      <main>
        {/* <HandleClick /> */}

        {/* Prop Drilling */}
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit} />

        <SearchItem
          search={search}
          setSearch={setSearch} />

        {isLoading && <p style={{margin: '1remhttp://localhost:3500/'}} >Loading items...</p>}
        {fetchError && <p style={{ color: 'red'}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <ItemList
          items={items.filter(item => ((item.name).toLowerCase())
            .includes(search.toLowerCase()))}
          handleOnCheck={handleOnCheck}
          handleDelete={handleDelete} />
        }
        {/* <ChangingColorPage /> */}
      </main>

      <Footer length={items.length} />
    </div>
  );
}



export default App;
