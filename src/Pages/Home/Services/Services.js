import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Services.css'



const Services = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://calm-mountain-94384.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="products">
            <div className="container p-5 ">
                <div className="p-5">

                    <h3 style={{ color: 'yellow' }}>
                        Most Wanted Products
                    </h3>
                    <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '60px' }}>
                        Popular Watches
                    </h1>
                </div>



                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        products.slice(0, 6).map(product => <Product
                            key={product.name}
                            product={product}
                        >

                        </Product>)
                    }




                </div>

            </div>
        </div>
    );
};

export default Services;