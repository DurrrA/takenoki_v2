import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './tanaman.css';
import {
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
  Spinner
} from "@material-tailwind/react";

const Tanaman = ({}) => {

    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isHovered, setIsHovered] = useState(null);
    
    const openModal = () => {
      setIsOpen(true);
    };
    const closeModal = () => {
      setIsOpen(false);
    }
    const shuffleArray = (array) => {
      let arr = [...array]; 
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Modify the copy
      }
      return arr; // Return the modified copy
    } 
    
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('dataTanaman.json');
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const data = await response.json();
          const shuffleddata = shuffleArray(data);
          setProducts(shuffleddata);
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
          <div className="overlay">
          </div>
          {
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , backgroundColor: 'dark'}}>
          {isOpen && selectedItem && (
            <Dialog size="l" open={isOpen} handler={openModal} className="dialog-body" title={selectedItem.nama}>
            <DialogHeader className="justify-between">
              <div className="flex items-center gap-1">
                <Avatar
                  size="md"
                  alt="logo"
                  src="/assets/Gardenista.png"
                />
              </div>
            </DialogHeader>
            <DialogBody>
            <div className="flex items-center mb-10">
              <img
                alt={selectedItem.nama}
                className="w-2px h-auto rounded-lg object-cover object-center"
                src={selectedItem.gambar}
                style={{width: '200px', height: 'auto'}}
              />
              <Dialog size="l" open={isOpen} handler={openModal} className='dialog-body'>
            <DialogHeader className="justify-between">
              <div className="flex items-center gap-1">
                <Avatar
                  size="md"
                  alt="logo"
                  src="/assets/Gardenista.png"
                />
              </div>
            </DialogHeader>
            <DialogBody>
            <div className="flex items-center mb-10">
              <img
                alt={selectedItem.nama}
                className="w-2px h-auto rounded-lg object-cover object-center"
                src={selectedItem.gambar}
                style={{width: '200px', height: 'auto'}}
              />
              <div className="ml-4">
                <Typography
                  className='justify-center font-bold text-lg'
                >
                  {selectedItem.nama}
                </Typography>
                <Typography className='text-gray-500'>
                  {selectedItem.jenis}
                </Typography>
                <Typography className='text-green-500 font-bold'>
                  {selectedItem.harga}
                </Typography>
              </div>
            </div>
              <Typography variant='small' className='justify-center'>
              {selectedItem.deskripsi}
              </Typography>
            </DialogBody>
            <DialogFooter className="justify-between">
              <div className="flex items-center gap-16">
              </div>
              <Button
                size="sm"
                variant="outlined"
                color="blue-gray"
                className="mr-5 flex items-center"
                onClick={closeModal}
              >
                Close
              </Button>
            </DialogFooter>
          </Dialog>
            </div>
              <Typography variant='small' className='justify-center'>
              {selectedItem.deskripsi}
              </Typography>
            </DialogBody>
            <DialogFooter className="justify-between">
              <div className="flex items-center gap-16">
              </div>
              <Button
                size="sm"
                variant="outlined"
                color="blue-gray"
                className="mr-5 flex items-center"
                onClick={closeModal}
              >
                Close
              </Button>
            </DialogFooter>
          </Dialog>
          )}
          {products.slice(0, 5).map((item, index) => (
            <Card
            className="h-32 w-48 cursor-pointer overflow-hidden transition-opacity hover:opacity-90 m-2"
            onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            onClick={() => {setSelectedItem(item); setIsOpen(true);}}
          >
            <img
              alt={item.nama}
              className="h-full w-full object-cover object-center"
              src={item.gambar}
            />
            {isHovered === index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
                  {item.nama}
                </div>
              )}
          </Card>
          ))}
        </div>
}
        </body>
      );
}

export default Tanaman;