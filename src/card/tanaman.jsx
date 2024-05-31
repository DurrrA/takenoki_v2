import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Tanaman = ({}) => {

    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const shuffleArray = (array) => {
      let arr = [...array]; // Create a copy of the array
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
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {shuffleArray([...products]).slice(0, 5).map((item, index) => (
            <button key={index} style={{ border: '1px solid #ccc', width: '200px', padding: '10px', margin: '5px', flex:'' }}>
              <img src={item.gambar} alt={item.nama} style={{width: '2000px', height: 'auto'}} />
            </button>
          ))}
        </div>
      );
}

export default Tanaman;