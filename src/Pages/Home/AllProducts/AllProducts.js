
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







// import React, { useEffect, useState } from 'react';
// import Showservice from '../Showservice/Showservice';
// // import Showcourse from '../Showcourse/Showcourse';
// import './Services.css';
// const Services = () => {
//     // import state
//     const [services, setServices] = useState([])
//     // fake data call-------------
//     useEffect(() => {
//         fetch('https://fierce-springs-23134.herokuapp.com/services')
//             .then(res => res.json())
//             .then(data => setServices(data))
//     }, []);
//     return (
//         <div className="container mt-5">
//             <h1 id="h1provided" >Our Services</h1>
//             <div id="service-back" className="row row-cols-1 row-cols-md-3 g-4 mt-3 ">
//                 {
//                     services.map(service => <Showservice
//                         key={service._id}
//                         service={service}>
//                     </Showservice>)
//                     // we use Showservice function to import data
//                 }
//             </div>

//         </div>

//     );
// };

// export default Services; 