import React from 'react';

import{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Unstable_Grid2';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import person from '../../Util/images/person_4-min.jpg';
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import{Link} from 'react-router-dom';
import './style.css';
import home from '../../Utillis/images/home.png';
const Details =() =>{


    const itemData = [ 
       
        
          
    ]

      



    const { id } = useParams();
    const [house, setHouse] = useState([]);
    const getHouse = async () => {
        const response = await fetch(`https://my-json-server.typicode.com/DevAyaSodqi/mock-api/house/${id}`);
        const FinalData = await response.json();
        setHouse(FinalData)
    }
  
  
  
        
    useEffect(() => {
    getHouse();
     }, [id]
      );


   

    return(

      
        <>
        <div>
        <img src={home} alt="" className="home" />
        
        
      </div>
         

        <div className="two-column-container">
      <div className="column">
       
      <Card sx={{ maxWidth: 500 }}>
      <CardMedia className='card-image'
        sx={{objectFit:'contain' }}
        image={house.photo} 
       
      />
        
      
      
    
    </Card>


      </div>

      <div className="column">
        
      <h3 style={{float:'right'}}>{house.price}$</h3>
        <h1>{house.title}</h1>

        <Grid xs display="flex" justifyContent="start" alignItems="center">
           <LocationOnIcon style={{color:'#005555'}}/>
           <h5 style={{marginLeft:'10px'}}>{house.location}</h5>
         </Grid>
        
        <p>{house.description}</p>

     



       <Grid container spacing={1} >
    <Grid xs display="flex" justifyContent="center" alignItems="center">
    <BedIcon style={{color:'#005555'}}/>
    <h5 style={{marginLeft:'10px'}}>{house.bedroom}BedRoom</h5>
  
  </Grid>
  <Grid display="flex" justifyContent="center" alignItems="center">
  <BathtubIcon style={{color:'#005555'}}/>
  <h5 style={{marginLeft:'10px'}}>{house.bathroom}BathRoom</h5>
  </Grid>
  <Grid xs display="flex" justifyContent="center" alignItems="center">
 
  </Grid>
</Grid>


<Grid container spacing={1} >
    <Grid xs display="flex" justifyContent="center" alignItems="center">
   
    <Button variant="contained" style={{backgroundColor:'#005555',textTransform:'capitalize',color:'white'}} endIcon={<FavoriteBorderIcon />}>
  Favorite</Button>
  
  </Grid>
  <Grid display="flex" justifyContent="center" alignItems="center">
  <Button variant="contained" style={{backgroundColor:'#005555',textTransform:'capitalize',color:'white'}} endIcon={<ArrowBackIcon />}>
  <Link to ='/' style={{textDecoration:'none',color:'white'}}>Back</Link></Button>
  </Grid>
  <Grid xs display="flex" justifyContent="center" alignItems="center">
 
  </Grid>
</Grid>




 <ImageList sx={{ width: 500}} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
           
          />
        </ImageListItem>
      ))}



      
    </ImageList> 


 

    {/* <Grid container spacing={1} >
  
  <Grid xs display="flex" justifyContent="flex-end" alignItems="flex-end">
  <div class="d-block agent-box p-5">
              <div class="img mb-4">
                <img
                  src={person}
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="text">
                <h3 class="mb-0" style={{marginRight:'10px'}}><PersonIcon style={{marginRight:'10px' ,color:'#005555'}}/>
                  Aya Sodqi</h3>
                <h3 class="meta mb-3" style={{marginRight:'10px'}}><EmailIcon style={{marginRight:'10px' ,color:'#005555'}}/>
                  mssa20909@gmail.com</h3>
                  <h3 class="meta mb-3" style={{marginRight:'10px'}}><PhoneIcon style={{marginRight:'10px' ,color:'#005555'}}/>
                 0597154802</h3>
              
              </div>
            </div>   

  </Grid>
</Grid> */}


    

      </div>

     

    </div>

  
        </>
    )

}


export default Details;