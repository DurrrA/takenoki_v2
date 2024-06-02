import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import MyNavbar from '../components/navbar';
import Footer from '../components/footer';
import './App.css';

const TentangKami = () => {
  return (
    <>
    <MyNavbar />
    <div className='content'>
    <div className="overflow-hidden">
      <div className='container mx-auto p-4'>
      </div>
    </div>
    </div>
    <Footer />
    </>

  )
}

export default TentangKami
