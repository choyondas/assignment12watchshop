import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./PlaceOrder.css"


const PlaceOrder = () => {
    const { id } = useParams();


    const [item, setItem] = useState([])



    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);
    return (
        <div>

            <br />
            <br />
            <br />


            <div class="container">
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <img className="img-fluid " src={item.img} alt="..." />
                            <h3>{item.name}</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>{item.info}</p>

                            <p>${item.price}</p>
                            <p>Manufacturer: {item.manufacturer}</p>
                            <p>Brand: {item.brand} </p>
                            <p>Rating: {item.rating} </p>


                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>

            </div>
















            {/* <div className="details">
                <div>
                    <br /><br />
                    <h2 className="text-center fw-bold text-black ">{user.name}</h2>

                    <div class="card mb-3">
                        <img className="img-fluid w-50" src={user.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h2 class="card-title text-warning fw-bold">${user.price}</h2>
                            <p class="card-text">{user.description}</p>

                            <Link to="/customer">
                                <button className="btn btn-success  m-3">CONFIRM ORDER</button></Link>

                            {/* <button className="btn" onClick={() => handleDelUser(user._id)} >Cancel</button> */}
            {/* <Link to="/home">
                <button className="btn btn-danger  ">CENCLE</button></Link> */}



        </div>


    );
};

export default PlaceOrder;