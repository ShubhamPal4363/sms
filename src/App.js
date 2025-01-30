import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';

export default function App() {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  )
}
