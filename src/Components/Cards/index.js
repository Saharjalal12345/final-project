import  React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import Button from '@mui/material/Button/Button';
import{Link} from 'react-router-dom';
import './style.css';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function MediaCard({house}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { location, title,photo,bedroom,bathroom,price ,id} = house;
  return (
  <>
<Card sx={{ maxWidth: 345 }} style={{
   border:'2px solid #005555',
   marginBottom:'8px'
}} >
      <CardHeader
       action={
        <IconButton aria-label="settings">
         {price}$
        </IconButton>
      }
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        image={photo}
        alt=""
      />
      <CardContent>
       {location}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Property Details:</Typography>
         <div className='row-icon'>
          <BedIcon style={{
             color:'gray',
             marginRight:'8px'
          }}/>
          <Typography paragraph>
           {bedroom}BedRoom
          </Typography>
          <BathtubIcon style={{
             color:'gray',
             marginLeft:'8px'
          }}/>
          <Typography paragraph style={{
            marginLeft:'8px'
          }}>
           {bathroom}BathRoom
          </Typography>
          </div>
          <Button style={{
            backgroundColor:'#005555',
            textTransform:'capitalize',
            borderRadius:'15px',
            fontSize:'16px'
          }}>
            <Link to={`/details/${id}`} style={{
              textDecoration:'none',
              color:'white'
            }}> More Details</Link>
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  </>
  );
}