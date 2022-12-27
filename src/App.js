import React, { useEffect } from "react";

// import Store : Selector
import useCounterStore, { selectCounter, selectIncrementCounter, } from "./stores/counter";

// import store lagi
import usePostsStore, { selectPosts, selectFetchPostsAction } from "./stores/post";

function App() {
  // selecct statenya
  const counter = useCounterStore(selectCounter);
  const posts = usePostsStore(selectPosts);

  // select action
  const incrementCounter = useCounterStore(selectIncrementCounter);
  const fetchPosts = usePostsStore(selectFetchPostsAction);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
     <h1>Counternya : {counter}</h1>

     <button onClick={() => incrementCounter()}> Tambah Counter </button>
    
     <ul>
      {posts.map((satuanPost) => (
        <li key={satuanPost.id}>{satuanPost.title}</li>
      ))}
     </ul>
    </div>
  );
}

export default App;
