import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const TanamanGallery = ({}) => {

    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);    
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const openModal = () => {
      setIsOpen(true);
    };
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
            <div className={`modal ${isClosing ? 'modal-closing' : ''}`}>
              <div className="modal-content">
                <img src={selectedItem.gambar} alt={selectedItem.nama} style={{width: '200px', height: 'auto'}} />
                <div className="modal-text">
                  <h2>{selectedItem.nama}</h2>
                  <h4>{selectedItem.jenis}</h4>
                  <h4>{selectedItem.daerah}</h4>
                  <h4>{selectedItem.harga}</h4>
                </div>
              </div>
              <p>{selectedItem.deskripsi}</p>
              <button onClick={() => { setIsClosing(true); setTimeout(() => {setIsOpen(false); setSelectedItem(null);}, 300); }}>Close</button>
            </div>
          )}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((item, index) => (
            <button 
              key={index} 
              style={{ border: '1px solid #ccc', width: '200px', padding: '10px', margin: '10px', flex:'20%' }}
              onClick={() => {setSelectedItem(item); setIsOpen(true);}}
            >
              <img src={item.gambar} alt={item.nama} style={{width: '2000px', height: 'auto'}} />
            </button>
          ))}
        </div>
        </div>
        }
        <div className="overlay"></div>
        </body>
      );
}

export default TanamanGallery;