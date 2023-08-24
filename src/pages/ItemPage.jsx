//import { response } from "express";
import axios from "axios";
 import {useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import BookingWidget from "../BookingWidget.jsx";
import ItemGallery from "../ItemGallery.jsx";


export default function ItemPage(){
const {id} = useParams();
const [item, setItem] = useState(null);




useEffect(() => {
    if(!id)
    {
        return;
    }
    axios.get('/rent/' + id).then(response =>{
        setItem(response.data)
    })
},[id])



   if(!item) return '';

  


return(

<div className="font-serif text-[#0C6164] bg-white item-m border-2 px-4 md:px-9 py-4 border-[#0C6164] shadow-2xl shadow-black rounded-3xl">
 
  <div className="item-layout">

    <div className="md:col-span-1">
      <ItemGallery item={item} />
    </div>

    <div className="gap-2 justify-center">
      <div className="flex flex-col mb-10 gap-5 md:flex-row md:items-center lg:gap-2 xl:gap-4">
        <h1 className="m-2 text-3xl font-bold">{item.title}</h1>
        <h1 className="m-2 ml-[15rem] md:ml- text-2xl font-bold md:pl-0"> £{item.price} per day</h1>
      </div>
      <div className="mt-6 text-center">
        <h3>{item.description}</h3>
        <h3 className="mt-5">Category: <span className="font-bold">{item.category}</span></h3>
        <h3 className="mt-5">Brand: <span className="font-bold">{item.brand}</span></h3>
      </div>
      <BookingWidget item={item} />
    </div>
  </div>
</div>









    )
    
}