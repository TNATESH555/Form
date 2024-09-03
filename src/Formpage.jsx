import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './App.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Formpage() {
  const {id}=useParams("");
  const [assertdelivery,setassertdelivery]=useState([]);
  const [availability,setavailability]=useState([]);
  const [assetcategory,setassetcategory]=useState([]);
  const [assettype,setassettype]=useState([]);
  const [integrity,setintegrity]=useState([]);
  const [confidential,setconfidential]=useState([]);
  const [sensitive,setsensitive]=useState([]);
  const [asset,setasset]=useState([]);
  const[supplier,setsupplier]=useState([]);
  const [updatedText, setUpdatedText] = useState([])
  const [error,seterror]=useState(false)
  const [EditText, setEditText] = useState({
        name: '',
        asset_category_id: '',
        asset_item_id: '',
        serial: '',
        supplier_id:'',
        brand_id: '',
        description: '',
        location_id: '',
        asset_delivery_type_id:'',
        asset_location_type_id:'',
        integrity_type_id: '',
        checkin_checkout_status:'',
        asset_holder: '',
        delivery_note: '',
        sensitive_type_id: '',
        confidential_type_id: '',
        availability_type_id: '',
        asset_type_id: '',             
  });


  
  useEffect(() => {
    if (id) {
      axios.post(`http://learn.in/api/v1/asset/edit`,{id:id})
        .then(response => (setEditText(response.data.data)
         
        ))  
        .catch(error => console.log('Error fetching data:', error));
    }
  }, []);

  const handleChange = (e) => {    
    var { name, value } = e.target;
    setEditText(prevState => ({
      ...prevState,
      [name]: value,                                        
    }));
    
  };


const handlesave=(e)=>{
  e.preventDefault()
 if(EditText.availability_type_id===''||EditText.integrity_type_id===''||EditText.confidential_type_id===''||EditText.sensitive_type_id===''||EditText.asset_item_id===''||EditText.asset_category_id===''||EditText.asset_delivery_type_id===''||EditText.serial===''||EditText.name===''||EditText.asset_item_id===''||EditText.description===''){
  seterror(true)
 }

else{
  seterror(false)
  alert('Added successfully')
    axios.post(`http://learn.in/api/v1/asset/store`, {
        id:id,
        name: EditText.name,
        asset_category_id: EditText.asset_category_id,
        asset_item_id: EditText.asset_item_id,
        description: EditText.description,
        asset_delivery_type_id: EditText.asset_delivery_type_id,
        integrity_type_id: EditText.integrity_type_id,
        sensitive_type_id: EditText.sensitive_type_id,
        confidential_type_id: EditText.confidential_type_id,
        availability_type_id: EditText.availability_type_id,
        asset_type_id:EditText. asset_type_id,
        brand_id:EditText.brand_id,
        serial:EditText.serial,
        supplier_id:EditText.supplier_id

    })
      .then(response => {console.log(response)
        
      })  
      .catch(error => console.log('Error fetching data:', error));
     
  
  console.log('name:' ,EditText.name,
              'brand_id:' ,EditText.brand_id,
             'description:' ,EditText.description,
              'serial:' ,EditText.serial,
              'supplier_id:' ,EditText.supplier_id,
             'sensitive_type_id:' ,EditText.sensitive_type_id,
             'integrity_type_id:' ,EditText.integrity_type_id,
             'asset_type_id:' ,EditText.asset_item_id,
             'confidential_type_id:' ,EditText.confidential_type_id,
             'asset_category_id:' , EditText.asset_category_id,
             'asset_delivery_type_id: ',EditText.asset_delivery_type_id,
             'availability_type_id:',EditText.availability_type_id,
             'asset_item_id:',EditText.asset_item_id
);
}
}

 useEffect(()=>{
      axios.post(`http://learn.in/api/v1/common/get_brand_list`, {
        page:1,
        per_page:10,
        search:'',
        sortColumn:''
      })
        .then(response => {
          setUpdatedText(response.data.data.brand_list);
         
        })  
        .catch(error => console.log('Error fetching data:', error));
   
      },[]) 

  useEffect(()=>{   
    axios.post(`http://learn.in/api/v1/common/get_supplier_list`, {
      page:1,
      per_page:10,
      search:'',
      sortColumn:''
    })
      .then(response => {
        setsupplier(response.data.data.supplier_list);

      })  
      .catch(error => console.log('Error fetching data:', error));

    },[]) 

useEffect(()=>{
  axios.post(`http://learn.in/api/v1/common/get_asset_item_list`, {
    page:1,
    per_page:10,
    search:'',
    sortColumn:''
  })
    .then(response => {
      setasset(response.data.data.asset_item_list);

    })  
    .catch(error => console.log('Error fetching data:', error));

  },[]) 

  useEffect(()=>{
  axios.post(`http://learn.in/api/v1/common/get_sensitivity_type_list`, {
    page:1,
    per_page:10,
    search:'',
    sortColumn:''
  })
    .then(response => {
      setsensitive(response.data.data.sensitivity_type_list);
       
    })  
    .catch(error => console.log('Error fetching data:', error));

  },[]) 

useEffect(()=>{
  axios.post(`http://learn.in/api/v1/common/get_confidentiality_rating_list`, {
    page:1,
    per_page:10,
    search:'',
    sortColumn:''
  })
    .then(response => {
      setconfidential(response.data.data.confidentiality_rating_list);

    })  
    .catch(error => console.log('Error fetching data:', error));

  },[]) 

useEffect(()=>{
  axios.post(`http://learn.in/api/v1/common/get_integrity_rating_list `, {
    page:1,
    per_page:10,
    search:'',
    sortColumn:''
  })
    .then(response => {
      setintegrity(response.data.data.integrity_rating_list);

    })  
    .catch(error => console.log('Error fetching data:', error));

  },[]) 

useEffect(()=>{
  axios.post(`http://learn.in/api/v1/common/get_asset_type_list`, {
    page:1,
    per_page:10,
    search:'',
    sortColumn:''
  })
    .then(response => {
      setassettype(response.data.data.asset_type_list);
      
    })  
    .catch(error => console.log('Error fetching data:', error));

  },[]) 

useEffect(()=>{
  axios.post(`http://learn.in/api/v1/common/get_asset_category_list`, {
    page:1,
    per_page:10,
    search:'',
    sortColumn:''
  })
    .then(response => {
      setassetcategory(response.data.data.asset_category_list);

    })  
    .catch(error => console.log('Error fetching data:', error));

  },[]) 

useEffect(()=>{
  axios.post(`http://learn.in/api/v1/common/get_availability_rating`, {
    page:1,
    per_page:10,
    search:'',
    sortColumn:''
  })
    .then(response => {
      setavailability(response.data.data.availability_rating_list);
      
    })  
    .catch(error => console.log('Error fetching data:', error));

  },[]) 

useEffect(() => {
  axios.post(`http://learn.in/api/v1/common/get_delivery_type_list`, {
    page: 1,
    per_page: 10,
    search: '',
    sortColumn: ''
  })
  .then(response => {
    setassertdelivery(response.data.data.delivery_type_list);
  })  
  .catch(error => console.log('Error fetching data:', error));
}, []);

  return (
   
    <form onSubmit={handlesave}>
        <Stack direction="row" spacing={-2.5} justifyContent={'center'} marginTop={10} marginLeft={1}>
       <Container>
         <label htmlFor="">NAME</label>
         <TextField
                    label="Name"
                    value={EditText.name}
                    name="name"
                    onChange={handleChange}
                    
                    sx={{
                        height:100,
                        width: 500,
                        marginLeft:7.5
                    }}/>
                    {error&&EditText.name===''&&(
                     <InputLabel  sx={{marginLeft:35, marginTop:-5, color:'red'}}>Enter the Name Correctly</InputLabel>)}
  <br />
              <label htmlFor="">SERIAL</label>    
                <TextField
                    label="Serial"
                    value={EditText.serial}
                    name="serial"
                    onChange={handleChange}
                    sx={{
                        height:100,
                        width: 500,
                        marginLeft:7
                    }}/> {error&&EditText.serial===''&&(
                      <InputLabel  sx={{marginLeft:35, marginTop:-5, color:'red'}}>Enter the Serial</InputLabel>)}
       <br />
        <label htmlFor="">SUPPLIER</label> 
        <FormControl sx={{ m: 1, minWidth: 500, marginLeft:4.75, marginTop:-.5}}>
        <InputLabel id="demo-simple-select-autowidth-label">Supplier</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={EditText.supplier_id}
          name='supplier_id'
          onChange={handleChange}
          autoWidth
          label="Age"
        >
         {supplier.map((sup,id)=>(<MenuItem value={sup.id} key={id}><td>{sup.id}.  {sup.name}</td></MenuItem>))}
          
        </Select>
      </FormControl>{error&&EditText.supplier_id===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:0, color:'red'}}>Select the Supplier</InputLabel>)}
      
       <br />
       <br /> <br />
        <label htmlFor="">ASSET ITEMS</label> 
        <FormControl sx={{ m: 1, minWidth: 500, marginLeft:1.75, marginTop:-1 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Asset Items</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          name='asset_item_id'
          value={EditText.asset_item_id}
          onChange={handleChange}
          autoWidth
          
          label="Age"
        >
        {asset.map((asset,id)=>(<MenuItem value={asset.id} key={id}>{asset.id}. {asset.name} </MenuItem>))}
        
                 
        </Select>
      </FormControl>{error&&EditText.asset_item_id===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:0, color:'red'}}>Select the Asset Items</InputLabel>)}
   <br /><br /> <br />
 
      <label htmlFor="">ASSET TYPE</label> 
        <FormControl sx={{ m: 1, minWidth: 500, marginLeft:2.75, marginTop:-1}}>
        <InputLabel id="demo-simple-select-autowidth-label">Asset Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={EditText.asset_type_id}
          name='asset_type_id'
          onChange={handleChange}
          autoWidth
          label="Age"
        >
         {assettype.map((assettyp,id)=>( <MenuItem value={assettyp.id} key={id}>{assettyp.id}. {assettyp.asset_name}</MenuItem>))}
         
        </Select>
      </FormControl>{error&&EditText.asset_type_id===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:0, color:'red'}}>Select the Asset Type</InputLabel>)}
<br /><br /><br />
      <label htmlFor="">ASSET <br />CATEGORY</label> 
        <FormControl sx={{ m: 1, minWidth: 500, marginLeft:13, marginTop:-6}}>
        <InputLabel id="demo-simple-select-autowidth-label">Asset Category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={EditText.asset_category_id}
          onChange={handleChange}
          autoWidth
          name='asset_category_id'
          label="Age"
        >
          {assetcategory.map((category,id)=>(<MenuItem value={category.id} key={id}>{category.id}. {category.name}</MenuItem>))}
          
        </Select>
      </FormControl>{error&&EditText.asset_category_id===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:-1, color:'red'}}>Select the Asset Category</InputLabel>)}
    <br /> <br />
     <label htmlFor="">ASSET <br />DELIVERY <br /> TYPE</label> 
    <FormControl sx={{ m: 1, minWidth: 500, marginLeft:13, marginTop:-7}}>
      <InputLabel id="demo-simple-select-autowidth-label">Asset Delivery Type</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={EditText.asset_delivery_type_id}
        onChange={handleChange}
        autoWidth
        name='asset_delivery_type_id'
        label="ASSET DELIVERY"
      >
        {assertdelivery?.map((del, id) => (
          <MenuItem  value={del.id} key={id}>{del.id}. {del.name}</MenuItem>
        ))}
      </Select>
    </FormControl>{error&&EditText.asset_delivery_type_id===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:-1, color:'red'}}>Select the Asset Delivery</InputLabel>)}
        </Container>

        <Container> 
        <label htmlFor="">DESCRIPTION</label>
        
          <TextField
                    label="Description"
                    value={EditText.description}
                    name="description"
                    onChange={handleChange}
                    sx={{
                        height:100,
                        width: 500,
                        marginLeft:4.25
                    }}
                /> {error&&EditText.description.trim()==='' &&(
                  <InputLabel  sx={{marginLeft:35, marginTop:-3.75, color:'red'}}>Enter the Description</InputLabel>)}
                  
                  <label htmlFor="">BRAND</label>
      <FormControl sx={{ m: 1, minWidth: 500, marginLeft: 16.75, marginTop: -2.5 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Brands</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={EditText.brand_id}
          name="brand_id"
          onChange={handleChange}
          autoWidth
          label="Brands"
        >
           {Array.isArray(updatedText) && updatedText.map((val, id) => (
            <MenuItem value={val.id} key={id}>
              {val.id}. {val.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {error && EditText.brand_id === '' && (
        <InputLabel sx={{ marginLeft: 35, marginTop: 0.5, color: 'red' }}>Select the brand</InputLabel>
      )}

                            <label htmlFor="" className='sensitive'>SENSITIVE <br /> TYPE</label> 
        <FormControl sx={{ m: 1, minWidth: 500, marginLeft:16.75, marginTop:-0.75}}>
        <InputLabel id="demo-simple-select-autowidth-label">Sensitive Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={EditText.sensitive_type_id}
          onChange={handleChange}
          autoWidth
          label="Age"
          name='sensitive_type_id'
        >
                        {sensitive.map((val,id)=>(<MenuItem value={val.id} key={id}><td>{val.id}. {val.name}</td></MenuItem>))}
        </Select>
      </FormControl>{error&&EditText.sensitive_type_id===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:0, color:'red'}}>Select the Type</InputLabel>)}
<br /><br /> <br />

      <label htmlFor="">Confidential <br /> TYPE</label> 
        <FormControl sx={{ m: 1, minWidth: 500, marginLeft:16.75, marginTop:-7.25}}>
        <InputLabel id="demo-simple-select-autowidth-label">Confidential Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={EditText.confidential_type_id}
          onChange={handleChange}
          autoWidth
          name='confidential_type_id'
          label="Age"
        >
          {confidential.map((confiq,id)=>(<MenuItem value={confiq.id} key={id}>{confiq.id}. {confiq.name}</MenuItem>))}
          
        </Select>
      </FormControl>
      {error&&EditText.confidential_type_id===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:0, color:'red'}}>Select the Confidential</InputLabel>)}

      <br /> <br />
 
      <label htmlFor="">INTEGRITY <br /> TYPE</label> 
        <FormControl sx={{ m: 1, minWidth: 500, marginLeft:16.75, marginTop:-5.5}}>
        <InputLabel id="demo-simple-select-autowidth-label"> Integrity Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          value={EditText.integrity_type_id}
          autoWidth
          name='integrity_type_id'
          onChange={handleChange}
          label="Age"
        >
        {integrity.map((val,id)=>(<MenuItem value={val.id} key={id}>{val.id}. {val.name}</MenuItem>))}
          
        </Select>
      </FormControl>
      {error&&EditText.integrity_type_id===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:0, color:'red'}}>Select the Integrity</InputLabel>)}

      <br /> <br /> <br />

<label htmlFor="">AVAILABILITY <br /> TYPE</label> 
  <FormControl sx={{ m: 1, minWidth: 500, marginLeft:16.75, marginTop:-6}}>
  <InputLabel id="demo-simple-select-autowidth-label"> Avilability Type</InputLabel>
  <Select
    labelId="demo-simple-select-autowidth-label"
    value={EditText.availability_type_id}
    name='availability_type_id'
    onChange={handleChange} 
    autoWidth
    label="Age"
    
  >
   {availability.map((val,id)=>(<MenuItem value={val.id} key={id}>{val.id}.{val.name}</MenuItem>))}
    
  </Select>
</FormControl>{error&&EditText.availability_type_id===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:-1, color:'red'}}>Select the Availabiluity Type</InputLabel>)}



<Button  type='submit' variant="contained" color="success" sx={{marginTop:5.5 ,marginBottom:20 , marginLeft:17} } >Save</Button>   
  
           
       </Container></Stack>
       </form>
 ) 
}

export default Formpage