import React, {useEffect, useState} from 'react';

const Tanaman = ({}) => {

    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);    



    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);

            try {
                const response = await fetch('https://fakestoreapi.com/products');
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
          {products.map((item, index) => (
            <div key={index} style={{ border: '1px solid #ccc', width: '200px', padding: '10px', margin: '5px', flex: '0 0 30% ' }}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button>Like</button>
            </div>
          ))}
        </div>
      );
}

export default Tanaman;