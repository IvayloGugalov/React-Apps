import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import NewPost from './features/posts/NewPost'
import PostPage from './features/posts/PostPage'
import EditPost from './features/posts/EditPost'
import About from './components/About'
import PageNotFound from './components/PageNotFound'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header title='Blog posts' />
      <Nav />
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/newPost' element={<NewPost />} />
          <Route path='/editPost/:id' element={<EditPost />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
