// App.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />    {/* Navbar will be displayed on every page */}
      <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
      <Outlet />    {/* Nested routes will be rendered here */}
      </main>
      <Footer />    {/* Footer will be displayed on every page */}
    </div>
  );
};

export default App;
