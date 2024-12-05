import React, { useState } from 'react';

const students = [
  { id: 1, name: 'John Doe', age: 20 },
  { id: 2, name: 'Jane Smith', age: 22 },
];

const SearchStudent = () => {
  const [query, setQuery] = useState('');
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Student</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredStudents.map(student => (
          <li key={student.id}>{student.name} - {student.age} years old</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchStudent;
