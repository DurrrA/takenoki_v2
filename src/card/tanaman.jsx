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
        setLoading(true);
        
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
    
      fetchProducts();
    }, []);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer); // This will clear the timer when the component unmounts
  }, []);

    if (loading) {
        return <div className="spinner-container">
                  <Spinner/>
                </div>
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
            // <div className={`modal ${isClosing ? 'modal-closing' : ''}`}>
            //   <div className="modal-content">
            //     <img src={selectedItem.gambar} alt={selectedItem.nama} style={{width: '200px', height: 'auto'}} />
            //     <div className="modal-text">
            //       <h2>{selectedItem.nama}</h2>
            //       <h4>{selectedItem.jenis}</h4>
            //       <h4>{selectedItem.daerah}</h4>
            //       <h4>{selectedItem.harga}</h4>
            //     </div>
            //   </div>
            //   <p>{selectedItem.deskripsi}</p>
            //   <button onClick={() => { setIsClosing(true); setTimeout(() => {setIsOpen(false); setSelectedItem(null);}, 300); }}>Close</button>
            // </div>

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
                  className='justify-center'
                >
                  {selectedItem.nama}
                </Typography>
                <Typography>
                  {selectedItem.jenis}
                </Typography>
                <Typography>
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
          )}
          {products.slice(0, 5).map((item, index) => (
            // <button 
            //   onClick={() => {setSelectedItem(item); setIsOpen(true);}} 
            //   style={{ border: '', width: '200px', padding: '10px', margin: '5px', flex:'' , backgroundColor:'transparent'}}
            //   title={item.nama} // This will display the name of the tanaman when the button is hovered over
            // >
            //   <img 
            //     src={item.gambar} 
            //     alt={item.nama} 
            //     style={{width: '200px', height: 'auto'}} 
            //   />
            // </button>
            <Card
            className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90 m-2"
            onClick={() => {setSelectedItem(item); setIsOpen(true);}}
          >
            <img
              alt={item.nama}
              className="h-full w-full object-cover object-center"
              src={item.gambar}
            />
          </Card>
          ))}
        </div>
}
        </body>
      );
}

export default Tanaman;