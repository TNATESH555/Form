import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ConfirmAction(id) {

    var result = window.confirm("Are you sure you want to proceed?");
    if (result) { 
      axios.post(`http://learn.in/api/v1/asset/delete`,{id:id})
        .then((res) => {
          console.log(res)
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert("Action Cancelled!");
    }
  }

function DataGridDemo() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.post('http://learn.in/api/v1/asset', {
        page:1,
        per_page:10,
        search:'',
        sortColumn:''
      })
      .then(response => {         
          const arrange=(response.data.data.rows); 
          setData(arrange)
                      
      })
      .catch(error => {
          
          console.error('Error fetching data:', error);
      });
  },[]);

  const flattenedData =data.map(res =>({
    id: res.id,
    name:res.name,
    description:res.description,
    asset_delivery_type_id:res.asset_delivery_type_id,
    sensitive_type_id:res.sensitive_type_id
  }));


    return (
      <Box sx={{ height: 400, width: '65%',margin:'20%',marginTop:5,marginLeft:27 ,p :5}}>
        <Link to='/add'><Button type='button' variant="contained" size="small" className='add' sx={{marginBottom:2}}>ADD</Button></Link>
        <DataGrid
          rows={flattenedData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    );
  }

  export default DataGridDemo

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 150,
      editable: true,
    },
    {
      field: 'asset_delivery_type_id',
      headerName: 'asset_delivery_type_id',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
        field: 'sensitive_type_id',
        headerName: 'sensitive_type_id',
        type: 'number',
        width: 110,
        editable: true,
      },{
        field: 'links',
        headerName: 'Actions',
        width: 200,
        renderCell: (params) => (
          <div className='deletebut'>
            
              <Link to={`/users/${params.row.id}`} className='buttons'>
              <Button type='button' variant="contained" color="success" sx={{margin:1}} >EDIT</Button>
              </Link>            
            <Button type='button' variant="outlined" startIcon={<DeleteIcon />} onClick={() => ConfirmAction(params.row.id)} >DELETE</Button>
          </div>
        ),
      },]