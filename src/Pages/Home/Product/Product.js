
import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = (props) => {
    const { _id, name, img, description, price, rating } = props.product;
    const des = description.slice(0, 100);
    return (
        <div className="col-lg-4 col-md-6 col-12">

            <div className="container">
                <div className="card">
                    <div className="imgBx">
                        <img className="w-50" src={img} />
                    </div>
                    <div className="contentBx">
                        <h2 style={{ color: '#c46212', fontWeight: 'bold', fontSize: "30px" }} >{name}</h2>
                        <div className="size">
                            <h3>{des}</h3>

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
                        <Link to={`/placeorder/${_id}`}> <button className="button-29 pt-2" role="button">Purches</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;