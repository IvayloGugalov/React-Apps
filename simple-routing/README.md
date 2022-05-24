# Simple React Router App

Using React Router v6 to showcase a simple routing:

```js
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
```
## How to run

- run ```npm install```
- run ```npx json-server -p 3500 -w src/data/db.json``` to start up the json server database
- run ```npm start```
