import React from 'react';
import "./ShowAllProducts.css"
const ShowAllProducts = (props) => {
    const { name, img, description } = props.product;
    return (
        <div className="col-lg-4 col-md-6 col-12">

            <div class="container">
                <div class="card">
                    <div class="imgBx">
                        <img src={img} />
                    </div>
                    <div class="contentBx">
                        <h2>{name}</h2>
                        <div class="size">
                            <p>{description}</p>

                        </div>
                        <div class="color">
                            <h3>Color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="#"><button class="button-29" role="button">Buy Now</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowAllProducts;