import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import NewPost from './Posts/NewPost'
import PostPage from './Posts/PostPage'
import EditPost from './Posts/EditPost'
import About from './About'
import PageNotFound from './PageNotFound'
import { DataProvider } from './context/DataContext'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Header title='Blog posts' />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newPost' element={<NewPost />} />
            <Route path='/editPost/:id' element={<EditPost />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
