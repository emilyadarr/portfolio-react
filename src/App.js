// import './App.css';
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // const [currentPage, setCurrentPage] = useState('About')
  
  // const renderPage = () => {
  //   if (currentPage === 'Contact') {
  //     return <Contact />;
  //   }
  //   if (currentPage === 'Portfolio') {
  //     return <Portfolio />;
  //   }
  //   if (currentPage === 'Resume') {
  //     return <Resume />;
  //   }
  //   return <About />;
  // };
  
  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default App;
