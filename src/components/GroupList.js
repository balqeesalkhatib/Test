import React, { useState } from "react";
import './style.css'
import Posts from "./Posts";
const GroupList = ({ groups, setGroups }) => {
  const [newEntry, setNewEntry] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  const handleUpdate = () => {
    setGroups(
      groups.map((group) => {
        if (group.id === newEntry) {
          return {
            ...group,
            name: updatedName,
            description: updatedDescription,
            createdAt: new Date().toLocaleString(),
          };
        }
        return group;
      })
    );

    setUpdatedName("");
    setUpdatedDescription("");
    setNewEntry(null);
  };
  const createPost = (groupId, title, content) => {
    setGroups(groups.map((group) => {
      if (group.id === groupId) {
        return {
          ...group,
          posts: [...group.posts, { title, content }]
        };
      }
      return group;
    }));
  };
  return (
    <div className="list">
      <h2>Group List</h2>
      {/* Group List: */}
      {groups &&
        groups.map((group) => {
          return (
            <ul key={group.id}>
              <li>
                <div>
                  <h3>{group.name}</h3>
                  <p>{group.description}</p>
                  <small>Date and Time: {group.createdAt}</small>
                 
                </div>
                {/* Group Editing: */}
                <button style={{backgroundColor:"gray"}}onClick={() => setNewEntry(group.id)}>Edit</button>
                <br/>
                {/* Group Deletion: */}
                <button  style={{backgroundColor:"red"}}
                  onClick={() => {
                    setGroups(
                      groups.filter((oneGroup) => oneGroup.id !== group.id)
                    );
                  }}
                >
                  Delete
                </button>
                 {/* Display Posts */}
              {groups && group.posts.map((post, index) => (
                <div key={index}>
                  <h4>{post.title}</h4>
                  <p>{post.content}</p>
                </div>
              ))}
                 {/* Create Post */}
                  <Posts  groupId={group.id} createPost={createPost}/>
                
              </li>
            </ul>
          );
        })}
      {newEntry && (
        <div>
          <input
            type="text"
            placeholder="Update the Group Name"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Update the Group Description"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
};

export default GroupList;
