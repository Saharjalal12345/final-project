import React from "react";
import { useNavigate } from 'react-router-dom';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import './style.css';
import found from '../../Utillis/images/found.png'

function NotFound() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="lg">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={6} sm={6} md={6} lg={10}>
          <CardMedia
          className="imgnotfound"
            component="img"
            image={found}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <article className="divfound">
            <Typography variant="h4" color='#2A5555'>Page is Not Found</Typography>
            <Typography>
            <Button
        sx={{ bgcolor: '#EB9235',marginTop:'1em',color:"white",fontWeight:'500' , '&:hover': {
          bgcolor: '#EB9235',color:"white"
        },  }}
        variant="outlined"
         onClick={handleClick}
      >
        BACK TO HOME
      </Button>
            </Typography>
          </article>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NotFound;

