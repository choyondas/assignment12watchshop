import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import "./ShowAllProducts.css"
const ShowAllProducts = (props) => {
    const { _id, name, img, price, description, rating } = props.product;
    return (
        <div className="col-lg-4 col-md-6 col-12">

            <div class="container">
                <div class="card">
                    <div class="imgBx">
                        <img className="w-50" src={img} />
                    </div>
                    <div class="contentBx">
                        <h2 style={{ color: '#c46212', fontWeight: 'bold', fontSize: "30px" }} >{name}</h2>
                        <div class="size">
                            <h3>{description}</h3>

                        </div>
                        <div className="size">
                            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fc890a' }}>${price}</h3>

                        </div>
                        <div>
                            <Rating
                                initialRating={rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly

                            />
                        </div>
                        <br />
                        <Link to={`/placeorder/${_id}`}> <button class="button-29 pt-2" role="button">Purches</button></Link>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default ShowAllProducts;