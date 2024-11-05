// App.js
import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar2 from './components/Navbar2';

const App = () => {
  return (
    <div>
      <Navbar2 />    {/* Navbar will be displayed on every page */}
      <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
      <Outlet />    {/* Nested routes will be rendered here */}
      </main>
      <Footer />    {/* Footer will be displayed on every page */}
    </div>
  );
};

export default App;
