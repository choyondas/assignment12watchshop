import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleAdminSubmit = e => {

        const user = { email };

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        e.preventDefault();
    }

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    return (
        <div className="text-center">
            <h2>make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: "40%", m: 1 }}
                    id="standard-basic"
                    label="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /><br /><br />


                <Button type='submit' variant="contained" > Make Admin </Button>
            </form>



        </div>
    );
};

export default MakeAdmin;