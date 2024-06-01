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
  Spinner
} from "@material-tailwind/react";


const TanamanGallery = ({}) => {

    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);    
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
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
    
      fetchProducts();
    }, []);


    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Error: {error.message}</h1>
    }

    return (
      <body className={isOpen ? 'modal-open' : ''}>
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

            <Dialog size="l" open={isOpen} handler={openModal}>
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
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((item, index) => (
            <Card
            className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90 m-2"
            onClick={() => {setSelectedItem(item); setIsOpen(true);}}
            key={index}
          >
            <img
              alt={item.nama}
              className="h-full w-full object-cover object-center"
              src={item.gambar}
            />
          </Card>
          ))}
        </div>
        </div>
        }
        <div className="overlay"></div>
        </body>
      );
}

export default TanamanGallery;