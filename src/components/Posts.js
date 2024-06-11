import React, { useState } from 'react'
import './style.css'
const Posts = ({ groupId, createPost }) => {
    const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(groupId, title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div>
        <h4> Create Posts</h4>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
       type="text"
        placeholder="Enter Post Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
    </div>
  )
}

export default Posts