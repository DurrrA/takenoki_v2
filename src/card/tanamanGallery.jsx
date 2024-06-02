import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardImage,
  Spinner,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";
import './tanamanGallery.css';


const TanamanGallery = ({}) => {

    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);    
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isHovered, setIsHovered] = useState(null);
    const uniqueDaerahs = [...new Set(products.map(item => item.daerah))];
    const openModal = () => {
      setIsOpen(true);
    };
    const closeModal = () => {
      setIsOpen(false);
    }
    useEffect(() => {
      const fetchProducts = async () => {
        setLoading(true);
    
        try {
          const response = await fetch('dataTanaman.json');
    
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
    
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
      const timer = setTimeout(() => {
        setLoading(true);
        fetchProducts();
      }, 500);

      return () => clearTimeout(timer); // This will clear the timer when the component unmounts
    }, []);


    if (loading) {
        return (
          <div className="flex items-center justify-center min-h-screen">
              <span className="loading loading-dots loading-lg"></span>
          </div>
      );
    }
    if (error) {
        return <h1>Error: {error.message}</h1>
    }

    return (
      <body className={isOpen ? 'modal-open' : ''}>
        {
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , backgroundColor: 'dark'}}>
          {isOpen && selectedItem && (
            <Dialog size="l" open={isOpen} onClose={openModal} className="dialog-body">
  <DialogHeader className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <Avatar size="md" alt="logo" src="/assets/Gardenista.png" />
    </div>
  </DialogHeader>
  <DialogBody>
    <div className="container mx-auto flex flex-col items-center md:flex-row mb-6">
      <img
        alt={selectedItem.nama}
        className="w-full md:w-1/2 rounded-lg object-cover"
        src={selectedItem.gambar}
        style={{ maxWidth: '200px', height: 'auto' }}
      />
      <div className="mt-4 md:mt-0 md:ml-4 md:grid-rows-3 grid-rows-1 grid text-center md:text-left">
        <Typography variant="h5" className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'Poppins' }}>
          {selectedItem.nama}
        </Typography>
        <Typography className="text-gray-800 mb-1" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          {selectedItem.jenis}
        </Typography>
        <Typography className="text-gray-800 font-light mb-2" style={{ fontFamily: 'Roboto' }}>
          Rp.{selectedItem.harga}
        </Typography>
      </div>
    </div>
    <Typography variant="body1" className="text-gray-700" style={{ fontFamily: 'Roboto' }}>
      {selectedItem.deskripsi}
    </Typography>
  </DialogBody>
  <DialogFooter className="flex justify-end">
    <Button
      size="small"
      variant="outlined"
      color="primary"
      onClick={closeModal}
    >
      Close
    </Button>
  </DialogFooter>
</Dialog>
          )}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
  {products.map((item, index) => (
    <div
      className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity m-2 relative"
      onMouseEnter={() => setIsHovered(index)}
      onMouseLeave={() => setIsHovered(null)}
      onClick={() => {setSelectedItem(item); setIsOpen(true);}}
      key={index}
    >
      <img
        alt={item.nama}
        className={`h-full w-full rounded-lg object-cover object-center ${isHovered === index ? 'opacity-50' : ''}`}
        src={item.gambar}
      />
      {isHovered === index && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
          {item.nama}
        </div>
      )}
    </div>
  ))}
</div>
        </div>
        }
        <div className="overlay"></div>
        </body>
      );
}

export default TanamanGallery;