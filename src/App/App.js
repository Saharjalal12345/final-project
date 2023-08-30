import React from "react";
import { Route, Routes } from "react-router-dom";
import {Landing , Layout} from '../Pages'
import About from '../Pages/About Us'
import SignIn from '../Pages/SignIn'
import SignUP from '../Pages/SignUp'
import Detailes from '../Pages/Detailes'
import Search from '../Pages/search'
import NotFound from "../Pages/NotFound";






function App() {
  return (
   
    <Layout>  
    
  <Routes>

    <Route path="/" element={<Landing />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/siginIn" element={<SignIn />}/>
    <Route path="/siginUp" element={<SignUP />}/>
    <Route path="/details/:id" element={<Detailes />} />
    <Route path="/search" element={<Search />}/>
    <Route path="*" element={<NotFound />} />
   

   </Routes>

    
    </Layout>
    
  );
  
}
 
export default App;



