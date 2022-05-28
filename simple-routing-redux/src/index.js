import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './app/store'
import { Provider } from 'react-redux'
import { fetchPosts } from './features/posts/postsSlice';

store.dispatch(fetchPosts());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Need to specify * so it can match the proper nested paths */}
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
