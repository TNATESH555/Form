import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function Add() {
    const { id } = useParams();
    const isNew = id === 'new';
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [brandName, setBrandName] = useState('');
    const [statusName, setStatusName] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        
        if (!name || !description || !brandName || !statusName) {
            alert('Please fill in all fields.');
            return;
        }
        
        const formData = {
            name: name,
            description: description,
            brand_name: brandName,
            status_name: statusName
        };

        if (isNew) {
            axios.post('http://learn.in/api/v1/asset', formData)
                .then(response => {console.log(response)
                    alert('Data added successfully.');
                    setName('');
                    setDescription('');
                    setBrandName('');
                    setStatusName('');
                })
                .catch(error => {
                    alert('Error adding data: ' + error.message);
                    console.error('Error adding data:', error);
                });
        } else {
            axios.put(`http://learn.in/api/v1/asset/${id}`, formData)
                .then(response => {console.log(response)
                    alert('Data updated successfully.');
                })
                .catch(error => {
                    alert('Error updating data: ' + error.message);
                    console.error('Error updating data:', error);
                });
        }
    };  
        
    return (
        <>
            <Stack spacing={1} marginTop={10} marginLeft={65}>
                <label htmlFor="name">Name </label>
                <TextField
                    placeholder="Name"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                        width: 300,
                        maxWidth: '100%',
                    }}
                />
                <br />
                <label htmlFor="description">Description </label>
                <TextField
                    placeholder="Description"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{
                        width: 300,
                        maxWidth: '100%',
                    }}
                />
                <br />
                <label htmlFor="brandName">Brand name</label>
                <TextField
                    placeholder="Brand name"
                    id="brandName"
                    name="brandName"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    sx={{
                        width: 300,
                        maxWidth: '100%',
                    }}
                />
                <br />
                <label htmlFor="statusName">Status name</label>
                <TextField
                    placeholder="Status name"
                    id="statusName"
                    name="statusName"
                    value={statusName}
                    onChange={(e) => setStatusName(e.target.value)}
                    sx={{
                        width: 300,
                        maxWidth: '100%',
                    }}
                />
                <br />
            </Stack>
            <Button variant="contained" size="small" onClick={handleSave} sx={{ marginLeft: 80, marginTop: 2 }}>SAVE</Button>
        </>
    );
}

export default Add;