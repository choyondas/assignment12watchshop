
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import "./PlaceOrder.css"



const PlaceOrder = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { id } = useParams();
    const [item, setItem] = useState([])


    //fetch by id
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);



    ////onsubmit
    const onSubmit = data => {
        // const savedCart = getStoredCart();
        // data.order = savedCart;
        console.log(data);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    reset()
                }
            })
    };
    return (
        <div className="prod-back">



            <center>
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
            </center>
            <div className="formStyle " style={{ backgroundColor: 'white', }}>
                <center className="w-50  mx-auto" style={{ border: '1px solid red' }}>

                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                        <input style={{ width: '75%', lineHeight: '30px', margin: '10px' }} type="text" defaultValue={item.name} {...register("productName", { required: true })} />
                        <br />
                        <input type="text" defaultValue={id} {...register("productId")} />
                        <br />
                        <input defaultValue={user.displayName} {...register("username")} />
                        <br />
                        <input defaultValue={user.email} {...register("email")} />
                        <br />

                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <br />
                        <input placeholder="phone" defaultValue="" {...register("phone")} />
                        <br />
                        {errors.email && <span className="error">This field is required</span>}
                        <input className="btn" type="Submit" />

                    </form>




                    {/* <form>
                        <h3>{item.name}</h3>
                        <TextField
                            disabled
                            sx={{ width: '25%', m: 2 }}
                            id="outlined-size-small"
                            defaultValue={id}
                            size="small"
                        /><br />

                        <TextField
                            disabled
                            sx={{ width: '25%', m: 2 }}
                            id="outlined-size-small"
                            defaultValue={user.displayName}
                            name="patientName"

                            size="small"
                        /><br />
                        <TextField
                            disabled
                            sx={{ width: '25%', m: 2 }}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            name="email"

                            size="small"
                        /><br />
                        <TextField

                            sx={{ width: '25%', m: 2 }}
                            id="outlined-size-small"
                            placeholder="your phone"
                            name="phone"

                            size="small"
                        /><br />
                        <TextField

                            sx={{ width: '25%', m: 2 }}
                            id="outlined-size-small"

                            name="email"
                            placeholder="your address"
                            size="small"
                        /><br />
                        <TextField

                            sx={{ width: '25%', m: 2 }}
                            id="outlined-size-small"
                            placeholder="others"
                            size="small"
                        />
                        <br />
                        <Button variant="contained">Submit</Button>

                    </form> */}


                </center>
            </div>


        </div>




    );
};

export default PlaceOrder;



