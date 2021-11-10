
import React, { useEffect, useState } from 'react';
import ShowAllProducts from '../ShowAllProducts/ShowAllProducts';




const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="container mt-5">
            <h1 id="h1provided" >Our Products</h1>
            <div id="service-back" className="row ">
                {
                    products.map(product => <ShowAllProducts
                        key={product._id}
                        product={product}
                    ></ShowAllProducts>



                    )

                }
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