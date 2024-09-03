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


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Formpage() {
  const {id}=useParams('')
  const [assertdelivery,setassertdelivery]=useState([])
  const [assertdelivery1,setassertdelivery1]=useState('')
  const [availability,setavailability]=useState([])
  const [availability1,setavailability1]=useState('')
  const [assetcategory,setassetcategory]=useState([])
  const [assetcategory1,setassetcategory1]=useState('')
  const [assettype,setassettype]=useState([])
  const [assettype1,setassettype1]=useState('')
  const [integrity,setintegrity]=useState([])
  const [integrity1,setintegrity1]=useState('')
  const [confidential,setconfidential]=useState([])
  const [confidential1,setconfidential1]=useState('')
  const [sensitive,setsensitive]=useState([]);
  const [sensitive1,setsensitive1]=useState('');
  const [asset,setasset]=useState([])
  const [asset1,setasset1]=useState('')
  const[supplier1,setsupplier1]=useState('');
  const[supplier,setsupplier]=useState([]);
  const [updatedText, setUpdatedText] = useState([])
  const [age, setAge] = useState('');
  const [error,seterror]=useState(false)
  const[name,setname]=useState('')
  const[desc,setdesc]=useState('')
  const[serial,setserial]=useState('')
  const [EditText, setEditText] = useState({
        name: '',
        asset_category_id: '',
        asset_item_id: '',
        serial: serial,
        supplier_id: '',
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
        asset_type_id:''             
  });

  const isNew = id === 'new';

  

// useEffect(() => {
//   if (isNew) {
//     axios.post(`http://learn.in/api/v1/asset/edit?id=${id}`,{id:'14'})
//       .then(response => {
//         setEditText(response.data.data)
//       })  
//       .catch(error => console.log('Error fetching data:', error));
//   }
// },[id,isNew]);

  const handleChange = (e) => {    
    var { name, value } = e.target;
    setEditText(prevState => ({
      ...prevState,
      [name]: value,                                    
    }));
  };
//console.log(EditText)

const handlesave=(e)=>{
  e.preventDefault()
 if(name===''||age===''||desc===''||serial===''||supplier1===''||sensitive1==='' ||integrity1===''||asset1==='||',confidential1===''||assertdelivery1===''||availability1===''||assetcategory1===''){
  seterror(true)
  
  axios.post(`http://learn.in/api/v1/asset/edit/${id}`, EditText)
        .then(response => {
          console.log(JSON.stringify(response.data));
          alert('Data fetched successfully:');
        })  
        .catch(error => console.log('Error updating data:', error));  
 }

else{
  seterror(false)
    axios.post(`http://learn.in/api/v1/asset/store`, {
     name: name,
     asset_category_id: assetcategory1,
        asset_item_id: asset1,
        serial: serial,
        supplier_id: supplier1,
        brand_id: age,
        description: desc,
        location_id: null,
        asset_delivery_type_id: assertdelivery1,
        asset_location_type_id: null,
        integrity_type_id: integrity1,
        checkin_checkout_status: 1,
        asset_holder: null,
        delivery_note: null,
        sensitive_type_id: sensitive1,
        confidential_type_id: confidential1,
        availability_type_id: availability1,
        asset_type_id:assettype1
    })
      .then(response => {console.log(response)
        
      })  
      .catch(error => console.log('Error fetching data:', error));
  
  console.log('name:' ,name,
             'brand_id:' ,age,
             'description:' ,desc,
             'serial:' ,serial,
             'supplier_id:' ,supplier1,
             'sensitive_type_id:' ,sensitive1,
             'integrity_type_id:' ,integrity1,
             'asset_type_id:' ,asset1,
             'confidential_type_id:' ,confidential1,
             'asset_category_id:' , assetcategory1,
             'asset_delivery_type_id: ',assertdelivery1,
             'availability_type_id:',availability1,
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
   
      },[updatedText]) 

  // useEffect(()=>{   
  //   axios.post(`http://learn.in/api/v1/common/get_supplier_list`, {
  //     page:1,
  //     per_page:10,
  //     search:'',
  //     sortColumn:''
  //   })
  //     .then(response => {
  //       setsupplier(response.data.data.supplier_list);

  //     })  
  //     .catch(error => console.log('Error fetching data:', error));

  //   },[supplier]) 
/*
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

  },[asset]) 

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

  },[sensitive]) 


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

  },[confidential]) 


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

  },[confidential]) 


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

  },[assettype]) 


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

  },[assetcategory]) 


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

  },[availability]) 


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
}, [assertdelivery]);
*/

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
                    {error&&name.trim()===''&&(
                     <InputLabel  sx={{marginLeft:35, marginTop:-5, color:'red'}}>Enter the Name Correctly</InputLabel>)}
  <br />
              <label htmlFor="">SERIAL</label>    
                <TextField
                    label="Serial"
                    id="name"
                    value={EditText.serial}
                    name="name"
                    onChange={(e)=>setserial(e.target.value)}
                    sx={{
                        height:100,
                        width: 500,
                        marginLeft:7
                    }}/> {error&&serial.trim()===''&&(
                      <InputLabel  sx={{marginLeft:35, marginTop:-5, color:'red'}}>Enter the Serial</InputLabel>)}
       <br />
        <label htmlFor="">SUPPLIER</label> 
        <FormControl sx={{ m: 1, minWidth: 500, marginLeft:4.75, marginTop:-.5}}>
        <InputLabel id="demo-simple-select-autowidth-label">Supplier</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={supplier1}
          onChange={(e)=>setsupplier1(e.target.value)}
          autoWidth
          label="Age"
        >
         {supplier.map((sup,id)=>(<MenuItem value= {sup.id} key={id}><td>{sup.id}.  {sup.name}</td></MenuItem>))}
          
        </Select>
      </FormControl>{error&&supplier1.trim()===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:0, color:'red'}}>Select the Supplier</InputLabel>)}
      
       <br />
       <br /> <br />
        <label htmlFor="">ASSET ITEMS</label> 
        <FormControl sx={{ m: 1, minWidth: 500, marginLeft:1.75, marginTop:-1 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Asset Items</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={asset1}
          onChange={(event)=>setasset1(event.target.value)}
          autoWidth
          label="Age"
        >
        {asset.map((asset,id)=>(<MenuItem value={asset.id} key={id}>{asset.id}. {asset.name} </MenuItem>))}
        
                 
        </Select>
      </FormControl>{error&&asset1.trim()===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:0, color:'red'}}>Select the Asset Items</InputLabel>)}
   <br /><br /> <br />
 
      <label htmlFor="">ASSET TYPE</label> 
        <FormControl sx={{ m: 1, minWidth: 500, marginLeft:2.75, marginTop:-1}}>
        <InputLabel id="demo-simple-select-autowidth-label">Asset Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={assettype1}
          onChange={(e)=>setassettype1(e.target.value)}
          autoWidth
          label="Age"
        >
         {assettype.map((assettyp,id)=>( <MenuItem value={assettyp.id} key={id}>{assettyp.id}. {assettyp.asset_name}</MenuItem>))}
         
        </Select>
      </FormControl>{error&&assettype1.trim()===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:0, color:'red'}}>Select the Asset Type</InputLabel>)}
<br /><br /><br />
      <label htmlFor="">ASSET <br />CATEGORY</label> 
        <FormControl sx={{ m: 1, minWidth: 500, marginLeft:13, marginTop:-6}}>
        <InputLabel id="demo-simple-select-autowidth-label">Asset Category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={assetcategory1}
          onChange={(e)=>setassetcategory1(e.target.value)}
          autoWidth
          label="Age"
        >
          {assetcategory.map((category,id)=>(<MenuItem value={category.id} key={id}>{category.id}. {category.name}</MenuItem>))}
          
        </Select>
      </FormControl>{error&&assetcategory1.trim()===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:-1, color:'red'}}>Select the Asset Category</InputLabel>)}
    <br /> <br />
     <label htmlFor="">ASSET <br />DELIVERY <br /> TYPE</label> 
    <FormControl sx={{ m: 1, minWidth: 500, marginLeft:13, marginTop:-7}}>
      <InputLabel id="demo-simple-select-autowidth-label">Asset Delivery Type</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={assertdelivery1}
        onChange={(e)=>setassertdelivery1(e.target.value)}
        autoWidth
        label="ASSET DELIVERY"
      >
        {assertdelivery?.map((del, id) => (
          <MenuItem  value={del.id} key={id}>{del.id}. {del.name}</MenuItem>
        ))}
      </Select>
    </FormControl>{error&&assertdelivery1.trim()===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:-1, color:'red'}}>Select the Asset Delivery</InputLabel>)}
        </Container>

        <Container> 
        <label htmlFor="">DESCRIPTION</label>
        
          <TextField
                    label="Description"
                    id="name"
                    name="name"
                    value={EditText.description}
                    onChange={(e)=>setdesc(e.target.value)}
                    sx={{
                        height:100,
                        width: 500,
                        marginLeft:4.25
                    }}
                /> {error&&desc.trim()===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:-2.75, color:'red'}}>Enter the Description</InputLabel>)}
                 
                 <label htmlFor="">BRAND</label>
                 <FormControl sx={{ m: 1, minWidth: 500, marginLeft:16.75, marginTop:-2.75}}>
        <InputLabel id="demo-simple-select-autowidth-label">Brands</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          defaultValue='brands'
          onChange={(e)=>setAge(e.target.value)}
          autoWidth
          label="Age"
        > {updatedText.map((val,id)=>(<MenuItem value={val.id} key={id}><td>{val.id}. {val.name}</td></MenuItem>))}

          
        </Select> 
      </FormControl>{error&&age.trim()===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:-1.5, color:'red'}}>Select the brand</InputLabel>)}
              <br /><br />
<br />
                            <label htmlFor="">SENSITIVE <br /> TYPE</label> 
        <FormControl sx={{ m: 1, minWidth: 500, marginLeft:16.75, marginTop:-6.25}}>
        <InputLabel id="demo-simple-select-autowidth-label">Sensitive Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sensitive1}
          onChange={(e)=>setsensitive1(e.target.value)}
          autoWidth
          label="Age"
        >
                        {sensitive.map((val,id)=>(<MenuItem value={val.id} key={id}><td>{val.id}. {val.name}</td></MenuItem>))}
        </Select>
      </FormControl>{error&&name.trim()===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:-1, color:'red'}}>Select the Type</InputLabel>)}
<br /><br /> <br />

      <label htmlFor="">Confidential <br /> TYPE</label> 
        <FormControl sx={{ m: 1, minWidth: 500, marginLeft:16.75, marginTop:-7.25}}>
        <InputLabel id="demo-simple-select-autowidth-label">Confidential Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={confidential1}
          onChange={(e)=>setconfidential1(e.target.value)}
          autoWidth
          label="Age"
        >
          {confidential.map((confiq,id)=>(<MenuItem value={confiq.id} key={id}>{confiq.id}. {confiq.name}</MenuItem>))}
          
        </Select>
      </FormControl>
      {error&&confidential1.trim()===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:0, color:'red'}}>Select the Confidential</InputLabel>)}

      <br /> <br />
 
      <label htmlFor="">INTEGRITY <br /> TYPE</label> 
        <FormControl sx={{ m: 1, minWidth: 500, marginLeft:16.75, marginTop:-5.5}}>
        <InputLabel id="demo-simple-select-autowidth-label"> Integrity Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          autoWidth
          onChange={(e)=>setintegrity1(e.target.value)}
          label="Age"
        >
        {integrity.map((val,id)=>(<MenuItem value={val.id} key={id}>{val.id}. {val.name}</MenuItem>))}
          
        </Select>
      </FormControl>
      {error&&integrity1.trim()===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:0, color:'red'}}>Select the Integrity</InputLabel>)}

      <br /> <br /> <br />

<label htmlFor="">AVAILABILITY <br /> TYPE</label> 
  <FormControl sx={{ m: 1, minWidth: 500, marginLeft:16.75, marginTop:-6.5}}>
  <InputLabel id="demo-simple-select-autowidth-label"> Avilability Type</InputLabel>
  <Select
    labelId="demo-simple-select-autowidth-label"
    value={availability1}
    onChange={(e)=>(setavailability1(e.target.value))} 
    autoWidth
    label="Age"
  >
   {availability.map((val,id)=>(<MenuItem value={val.id} key={id}>{val.id}.{val.name}</MenuItem>))}
    
  </Select>
</FormControl>{error&&availability1.trim()===''&&(
                  <InputLabel  sx={{marginLeft:35, marginTop:-1, color:'red'}}>Select the Availabiluity Type</InputLabel>)}

<Button variant="contained" sx={{marginTop:5.5 ,marginBottom:20 , marginLeft:17}}>Check In</Button>
<Button variant="contained" color="error" sx={{marginTop:5.5 ,marginBottom:20 , marginLeft:8}}>Check Out</Button>
<Button  type='submit' variant="contained" color="success" sx={{marginTop:5.5 ,marginBottom:20 , marginLeft:8} } >Save</Button>   
         
           
       </Container></Stack>
       </form>
  )
}

export default Formpage