import React, { useState } from 'react';

function Newform() {
  const [store, setStore] = useState([]); 
  const handleClickget = () => {
   
fetch('http://localhost:4000/users')
  .then(response => response.json())
  .then(users => console.log(users));
  }

  const handleClickadd = () => {
    const newUser = {id:1, name: 'NATESH', email: 'tnatesh555@gmail.com' };
fetch('http://localhost:4000/users', {
  id:'',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUser),
})
.then(response => response.json())
.then(user => console.log(user));
  }
  const handleClickupdate = () => {
    const updatedUser = { email: 'updatedemail@example.com' };

    fetch('http://localhost:4000/users/3', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
    .then(response => response.json())
    .then(user => console.log(user));}

const handleClickdelete = () => {
  const updatedUser = { email: 'updatedemail@example.com' };
  
  fetch('http://localhost:4000/users/5', {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(() => console.log('User deleted'));}
  

  return (
    <div>
       <h1 id='id'>GET</h1>
       
       <button onClick={handleClickget}>CLICK HERE</button>
      <h1 id='id'>ADD</h1>
      <button onClick={handleClickadd}>CLICK HERE</button>

      <h1 id='id'>UPDATE</h1>
      <button onClick={handleClickupdate}>CLICK HERE</button>

      <h1 id='id'>DELETE</h1>
      <button onClick={handleClickdelete}>CLICK HERE</button>
      <ul>
        {store.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Newform;