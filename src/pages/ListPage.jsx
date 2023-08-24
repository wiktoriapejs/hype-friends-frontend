
import {Navigate, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from "axios";
import {useState} from "react"
import "../App.css"


function ListPage() {


const [ addedPhotos, setAddedPhotos] = useState('');
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [category, setCategory] = useState('');
const [brand, setBrand] = useState('');
const [price, setDayPrice] = useState('');
const [discount, setDiscount] = useState('');
const [redirect, setRedirect] = useState(false);
const {id} =useParams();

useEffect(() => {
      if (!id) {
        return;
      }
      axios.get('/items/'+ id).then(response => {
         const {data} = response;
         setAddedPhotos(data.photos);
         setTitle(data.title);
         setDescription(data.description);
         setCategory(data.category);
         setBrand(data.brand);
         setDayPrice(data.price);
         setDiscount(data.discount);
      });
    }, [id]);

const img = new Image();

function uploadPhoto(ev)
{
      const files = ev.target.files;
      const data = new FormData();
      for(let i=0; i < files.length; i++){
            data.append('photos', files[i])
      }
      
      axios.post('/upload', data, {
        headers: {'Content-type': 'multipart/form-data'}
      }).then(response => {
            const {data: filenames} = response;
            setAddedPhotos(prev => {
                  return[...prev, ...filenames];
            })
            
      })
}


function handleCbClick(ev)
{
      setCategory(ev.target.value)
      console.log(ev.target.value)
    
}



function inputHeader(text) {
  return <h2 className='text-xl mt-4 mb-2'>{text}</h2>;
}





function preInput(header) {
  return (
    <>
      {inputHeader(header)}
     
    </>
  );
}

async function savePlace(ev){;
      ev.preventDefault();
      const itemData = {
            addedPhotos,
            title, 
            description, 
            category, 
            brand,  
            price, 
            discount}
      if(id)
      {
            //update
            
           await  axios.put('/items/:id', {
            id, ...itemData
           });
           setRedirect(true)
      }

      else
      {
            //new place
           
            await  axios.post('/items', itemData);
            setRedirect(true)}
      }


     if(redirect)
     {
      return <Navigate to={'/account'} />
     }

  
    function removePhoto(filename) {
      setAddedPhotos([...addedPhotos.filter((photo) => photo !== filename)]);
    }
    function selectAsMainPhoto(ev, filename) {
      ev.preventDefault();

      setAddedPhotos([filename,...addedPhotos.filter(photo => photo !== filename)]);
    }





return (
   <div className='text-[#0C6164] font-bold font-serif '>
      

        <p className=" pr-4 pt-5 text-2xl font-bold flex justify-center">List an item</p>

<form
      
      onSubmit={savePlace}
      className='w-full xl:w-9/12 mx-auto pt-2'
    >
      
      {preInput('Photos of your place')}
        <div className='mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 pt-2'>
          {addedPhotos.length > 0 &&
            addedPhotos.map((link) => (
              <div className='h-32 flex relative' key={link}>
                <img
                  className='rounded-2xl w-full object-cover'
                  src={'http://localhost:4000/' + link}
                  alt=''
                />
                <button
                  onClick={() => removePhoto(link)}
                  className='absolute right-2 top-2 bg-white justify-items-center bg-opacity-90 rounded-full cursor-pointer'
                >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 30" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
                </button>
                <button
                  onClick={(e) => selectAsMainPhoto(e, link)}
                  className='absolute right-2 bottom-2 bg-white bg-opacity-20 rounded-full cursor-pointer'
                >
                  {link === addedPhotos[0] && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
                  )}
                  {link !== addedPhotos[0] && (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                      />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          <label className=' pt-2 flex items-center justify-center border bg-transparent rounded-2xl p-8 text-xl text-gray-600'>
            <input
              multiple
              className='hidden cursor-pointer'
              onChange={uploadPhoto}
              type='file'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 h-8'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75'
              />
            </svg>
            Upload photo...
          </label>
        </div>



      {preInput('Title')}
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='title eg. gucci bag'
          type='text'
          className='p-2'
        ></input>


   

        
        {preInput('Description')}

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Big gucci bag, perfect for casual outfits...'

        ></textarea>

        {preInput('Category', '   Select category')}

        <div className=' pt-3 mb-5 mt-2 justify-center grid gap-2 grid-cols-3 md:grid-cols-3 lg:grid-cols-3'>
          <label className=' justify-center flex rounded-2xl gap-4 items-center cursor-pointer '>
          <input type="radio" id="clothing"
           name="category" 
           value="clothing" 
           checked={category === ('clothing') } 
           onChange={handleCbClick}
           className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
           Clothing
           </label>
          
           <label className=' justify-center flex rounded-2xl gap-4 items-center cursor-pointer '>
          <input type="radio" id="shoes"
           name="category" 
           value="shoes" 
           checked={category === ('shoes') } 
           onChange={handleCbClick}
           className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
           Shoes
           </label>
          
           <label className=' justify-center flex rounded-2xl gap-4 items-center cursor-pointer '>
          <input type="radio" id="accessories"
           name="category" 
           value="accessories" 
           checked={category === ('accessories') } 
           onChange={handleCbClick}
           className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
           Accessories
           </label>
          

         </div> 
         
         
         
         {preInput('Brand')}
        <input
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder='Gucci'
          type='text'
          className='p-1'
        ></input>

      {preInput('Price per day: £')}
        <input
          value={price}
          onChange={(e) => setDayPrice(e.target.value)}
          placeholder='£50'
          type='price-day'
          className='p-1'
        ></input>
         
         
         
         </div>

         
      <div className='save-button'>     
         <button className='border-2 rounded-full border-[#0C6164] primary justify-item-center my-4 px-8 py-2 justify-center text-[#0C6164]'>Save</button>
</div>
    </form>



    </div>
  );
}

export default ListPage;