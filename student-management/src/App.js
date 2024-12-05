import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/search" element={<SearchStudent />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
