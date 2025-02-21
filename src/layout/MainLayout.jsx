import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div>
    {/* navbar */}
      <nav>
    <Navbar></Navbar>
      </nav>
      {/* main content */}
      <main className='w-11/12 mx-auto' >
    <Outlet></Outlet>
      </main>
      {/* footer part */}
      <footer></footer>
    </div>
  );
};

export default MainLayout;