import React, { useState } from 'react';
import BlogList from './components/Bloglist';
import BlogForm from './components/Blogform';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  const addPost = (post) => {
    setPosts([...posts, { id: Date.now(), ...post }]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4 flex justify-center">Blog Platform</h1>
      <BlogForm addPost={addPost} updatePost={updatePost} currentPost={currentPost} setCurrentPost={setCurrentPost} />
      <BlogList posts={posts} setCurrentPost={setCurrentPost} deletePost={deletePost} />
    </div>
  );
};

export default App;
