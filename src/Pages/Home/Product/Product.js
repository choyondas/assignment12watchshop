import React from 'react';
import './Product.css'
const Product = (props) => {
    const { id, name, img, description, price } = props.product;
    return (
        <div className="col">

            <div class="container">
                <div class="card">
                    <div class="imgBx">
                        <img src={img} />
                    </div>
                    <div class="contentBx">
                        <h2>Latest Watch</h2>
                        <div class="size">
                            <h3>Size :</h3>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                        </div>
                        <div class="color">
                            <h3>Color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="#"><button class="button-29" role="button">Button 29</button></a>
                    </div>
                </div>
            </div>








            {/* <div class="card h-100">
                <img width="300px" height="500px" src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-footer text-center">
                    <button class="button-24" role="button">Buy Now</button>
                </div>
            </div> */}
        </div>
    );
};

export default Product;