import axios from "axios";
import React, { useEffect, useState } from "react";
import Shops from "./Shops";


const Viewshops = () => {
  const [shopmodule, setShops]=useState([]);
  useEffect(()=>{document.title="View Shops";
    getAllShops();
  },[]);

  const getAllShops = async() => {
    try{
        const response = await axios.get('http://localhost:8081/shop_details');
        console.log(response.data);
        setShops(response.data);
      }
      catch(err){
        console.log(err);
      }
  };
 
 
  return (
      <div>
        <h1 className="text-center">All Shops</h1>
        { 
            shopmodule.length>0?(
                shopmodule.map((sp) => 
                <Shops shp={sp} key={sp.category}/> )
            ):(
                <h1>No shops</h1> 
           ) } 
     </div>
    );
};

export default Viewshops;