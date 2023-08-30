import React,{useState,useEffect} from 'react'; 
//import NavBar from '../../Component/NavBar';
//import Footer from '../../Component/Footer';
//import Hero from '../../Component/Hero';
import CardContainer from '../../Components/CardContainer';
import HeroApp from '../../Components/Hero'


import './style.css'

const Landing = ()=> {
    

    const [house, setHouse] = useState([]);
    const getHouse = async () => {
        const response = await fetch("https://my-json-server.typicode.com/DevAyaSodqi/mock-api/house");
        const FinalData = await response.json();
        console.log(response.url)
        setHouse(FinalData)
    }

            useEffect(() => {
                getHouse();
               
                 }, []
                  )


    return <>
  
   <HeroApp />
   
   

      <h1 style={{
        color:'#005555',
        textDecoration:'underline',
        marginLeft:'15px',
      }}>Popular Properties</h1>
 
   <CardContainer houses={house}/>
  
  
    </>
}

export default Landing
