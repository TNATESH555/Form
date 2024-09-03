import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

function Spaceforworking() {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      setError(true);
    } else {
      setError(false);
     
    }
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            height: 100,
            width: 500,
            marginLeft: 7.5
          }}
        />
        {error && name.trim() === '' && (
          <InputLabel sx={{ marginLeft: 35, marginTop: -5, color: 'red' }}>Enter the Name Correctly</InputLabel>
        )}
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Spaceforworking;