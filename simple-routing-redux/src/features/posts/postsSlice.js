import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../api/post'

const initialState = {
  posts: [],
  search: '',
  searchResults: [],
  isLoading: false,
  error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await api.get('/posts');
    return [...response.data];
  } catch (err) {
    return err.response.data;
  }
});

export const addNewPost = createAsyncThunk('posts/addNewPost', async (newPost) => {
  try {
    const response = await api.post('/posts', newPost);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const editPost = createAsyncThunk('posts/updatePost', async (updatedPost) => {
  const { id } = updatedPost;
  try {
    const response = await api.put(`/posts/${id}`, updatedPost);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const deletePost = createAsyncThunk('posts/deletePost', async (deletedPost) => {
  const { id } = deletedPost;
  try {
    const response = await api.delete(`/posts/${id}`);
    if (response?.status === 200) {
      return deletedPost;
    } else {
      return `${response?.status}: ${response?.statusText}`;
    }
  } catch (err) {
    return err.message;
  }
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      }
    },
    setSearch: {
      reducer(state, action) {
        state.search = action.payload;
      }
    },
    setSearchResults: {
      reducer(state, action) {
        state.searchResults = action.payload;
      }
    }
  },
  // Called after the requests have been made
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
        state.searchResults = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        console.log(action.payload);
        state.posts.push(action.payload);
      })
      .addCase(editPost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Could not complete update');
          console.log(action.payload);
        } else {
          const { id } = action.payload;
          const posts = state.posts.filter(post => post.id !== id);
          state.posts = [...posts, action.payload];
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Could not complete deletion');
          console.log(action.payload);
        } else {
          const { id } = action.payload;
          const posts = state.posts.filter(post => post.id !== id);
          state.posts = posts;
        }
      })
  }
})

export const selectAllPosts = (state) => state.posts.posts;
export const getIsPostsLoading = (state) => state.posts.isLoading;
export const getPostsError = (state) => state.posts.error;
export const searchPosts = (state) => state.posts.search;
export const searchPostsResult = (state) => state.posts.searchResults;

export const getPostById = (state, id) => {
  return state.posts.posts.find(post => (post.id).toString() === id);
}

export const getPostCount = (state) => {
  return state.posts.posts?.length;
}

export const { postAdded, setSearch, setSearchResults } = postsSlice.actions;

export default postsSlice.reducer;