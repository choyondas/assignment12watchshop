
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import ShowAllProducts from '../ShowAllProducts/ShowAllProducts';

import "./AllProducts.css"


const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="allProducts">
            <Navigation></Navigation>
            <div className="container mt-5">
                <h1 style={{ color: '#c46212', fontSize: '60px', padding: '10px', justifyContent: 'center', display: 'flex' }}>  Our Products</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <ShowAllProducts
                            key={product._id}
                            product={product}
                        ></ShowAllProducts>



                        )

                    }
                </div>

                <div className="text-center p-5">

                    <NavLink to="/home">
                        <button class="button-82-pushable" role="button">
                            <span class="button-82-shadow"></span>
                            <span class="button-82-edge"></span>
                            <span class="button-82-front text">
                                Go Home Page
                            </span>
                        </button>
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

export default AllProducts;



