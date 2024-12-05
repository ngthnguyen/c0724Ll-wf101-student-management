import React from 'react';

const students = [
  { id: 1, name: 'Thai Nguyen', age: 20 },
  { id: 2, name: 'Hieu Thu Tha', age: 22 },
];

const StudentList = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name} - {student.age} years old</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
