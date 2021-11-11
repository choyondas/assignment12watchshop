import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img, description, price } = props.product;
    const des = description.slice(0, 100);
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
                            <h3>{des}</h3>

                        </div>
                        <div class="size">
                            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fc890a' }}>${price}</h3>

                        </div>
                        <div class="color">
                            <h3>Color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="#"><button class="button-29 pt-2" role="button">Buy Now</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;