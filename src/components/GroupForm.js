import React, { useState } from "react";
import GroupList from "./GroupList";
import './style.css'
const GroupForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [groups, setGroups] = useState([]);
  const submit = (e) => {
    e.preventDefault();
    const id = Date.now().toString();
    const createdAt = new Date().toLocaleString();
    const oneGroup = {
      id: id,
      name: name,
      description: description,
      createdAt: createdAt,
      posts:[] // empty array to list of posts
    };
    setGroups([...groups, oneGroup]);
    setName("");
    setDescription("");
  };
  return (
    <div className="form">
      <h2>Group Form</h2>
      {/* Group Creation Form: */}
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter the Group Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the Group Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create Group</button>
      </form>
      {groups.length? <GroupList groups={groups} setGroups={setGroups} />:<div></div>}
    </div>
  );
};

export default GroupForm;
