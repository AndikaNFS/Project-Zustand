import axios from 'axios';
import create from 'zustand';


// slice
const slicePosts = (set) => ({
    // state
    posts: [],

    // action (zustand tidak peduli asing atau tidak)
    fetchPosts: async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        
        // set statenya
        set({ posts: data })
    }
});

// hooks
const usePostsStore = create(slicePosts);

// selector state dan action
export const selectPosts = (state) => state.posts;
export const selectFetchPostsAction = (state) => state.fetchPosts;

// export hooks
export default usePostsStore;