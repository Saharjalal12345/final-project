import React,{useState,useEffect} from "react";
 import HeroSearch from "../../Components/HeroSearch";




const SearchPage = () =>{

    const [data , setData] = useState([]);
    useEffect(()=>{
       fetch('https://my-json-server.typicode.com/DevAyaSodqi/mock-api/house') 
       .then(res=>setData())
       .catch(error=>console.log(error));
    },[data])

 return(
      <>
      

        <HeroSearch /> 


      
      </>
 )

}

export default SearchPage;