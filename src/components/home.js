import React  from 'react';
import {useState } from 'react';
import ProductList from './ProductList';


  const Home =()=>{
    const images = [
        {
        "id":1,
        "img":"https://imageio.forbes.com/specials-images/imageserve/61475cca84f48343ac55ed24/iPhone-13/0x0.jpg?format=jpg&crop=1441,1080,x239,y0,safe&width=960"
        },
        {
            "id":2,
            "img":"https://www.lifehacker.com.au/wp-content/uploads/sites/4/2021/10/14/d779fe373b02783e0dd4d38b5b6b7d00-scaled.jpg"
            },
            {
                "id":3,
                "img":"https://images.samsung.com/in/smartphones/galaxy-z-fold4/buy/Fold4_Carousel_GroupKV_PC.jpg?imwidth=1366"
                },
                {
                    "id":4,
                    "img":"https://cdn.images.express.co.uk/img/dynamic/59/750x445/1482980.jpg"
                    },
                    {
                        "id":5,
                        "img":"https://imgscf.slidemembers.com/docs/1/1/297/mobile_accessories_templates_for_powerpoint_296913.jpg"
                        },
        
    ]
    const[i,setI]= useState(4);
     const prev =()=>{
     if(i===0){
         setI(4); 
     }
     else{
     setI(i-1);
 }
 
   }
   const next =()=>{
     if(i===4){
         setI(0); 
     }
     else{
     setI(i+1);
 }
 
   }

    return(<div>
     <img style={{width:"100%",height:"40vw"}}  src={images[i].img} alt="Not Found"/>
     

<div className='btnn'>
  <div> <button type="button"  onClick={prev}>&#60;</button></div>
 <div>   <button type="button"   onClick={next}>&#62;</button></div>
    </div>
    <ProductList/>
    </div>
 
    )
 }
 export default Home;