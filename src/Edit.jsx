import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import styled from '@mui/system/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

function Edit() {
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const { id } = useParams();
  const isNew = id === 'new';
  const [updatedText, setUpdatedText] = useState({
    name: '',
    description: '',
    brand_name: '', 
    status_name:''            
  });

  useEffect(() => {
    if (!isNew) {
      axios.post(`http://learn.in/api/v1/asset/edit?id=${id}`)
        .then(response => {
          setUpdatedText(response.data.data);
        })  
        .catch(error => console.log('Error fetching data:', error));
    }
  }, [id,isNew]);


  const handleSave = (e) => {
    e.preventDefault();
    if (!isNew || updatedText.name.trim() === '' || updatedText.description.trim() ===''|| !updatedText.status_name.endsWith('@gmail.com')||  updatedText.brand_name.trim() === '') {
      setError(true);
      axios.post(`http://example.in/api/v1/asset/store?id=1/${id}`, updatedText)
        .then(response => {
          console.log(JSON.stringify(response.data));
          alert('Data updated successfully:');
        })  
        .catch(error => console.log('Error updating data:', error));    
    }
  };

  return (
   
   <Stack sx={{marginLeft:60}}>   
          
            <h1>{id !== 'new' ? 'EDIT' : 'ADD'} USER DETAILS</h1><br /><br />
            <form>

            <label htmlFor="name" >NAME </label>
                <TextField
                    placeholder="Name"
                    id="name"
                    name="name"
                    value={updatedText.name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                        height:80,
                        width: 300,
                        marginLeft:10.5
                    }}
                />
                <br />

                <label htmlFor="name" >DESCRIPTION </label>
                <TextField
                    placeholder="Name"
                    id="name"
                    name="name"
                    value={updatedText.description}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                        height:80,
                        width: 300,
                        marginLeft:4
                    }}
                />
             <br />
             <label htmlFor="name" >SERIAL </label>
             <TextField
             
                    placeholder="Name"
                    id="name"
                    name="name"
                    value={updatedText.serial}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                        height:80,
                        width: 300,
                        marginLeft:10
                    }}
                /> <br />
              <Button variant="contained" size="small" onClick={handleSave} sx={{marginLeft:30}}>SAVE</Button>
            </form>
         
          </Stack>
   
  );
}

export default Edit;