import React, { useState } from 'react';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Student added: ${name}, ${age}`);
    setName('');
    setAge('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
