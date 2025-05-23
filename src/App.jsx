import { Dropdown } from 'bootstrap';
import React, { useEffect, useState } from 'react';


const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div>
      {posts.map(post => (
        <h1 key={post.id}>{post.id} {post.title} {post.body}</h1>
      ))}
    </div>

  );
};

export default App;