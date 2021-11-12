import React, { useEffect, useState } from 'react';
import "./ShowReview.css"




const ShowReview = () => {

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);

    return (
        <div className="review">
            <div className=" p-5 m-5 ">
                <h1 className='text-center heading-review'>Customers Review</h1>
                <div className='row'>


                    {
                        review.map(rev =>

                            <div class="card-deck col-lg-4 col-md-6 col-12">
                                <div class="card">
                                    <img class="card-img-top" src={rev.image} />
                                    <div class="card-body">
                                        <h5 class="card-title">Customer: {rev.username}</h5>
                                        <p class="card-text">{rev.suggestion}</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        <p>{rev.rating}</p>
                                    </div>
                                </div>

                            </div>)
                    }





                </div>
            </div>
        </div>

    );
};

export default ShowReview;