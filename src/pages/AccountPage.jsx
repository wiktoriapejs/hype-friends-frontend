import {useContext, useEffect, useState} from 'react';
import { Link, Navigate} from 'react-router-dom';
import axios from "axios";
import { UserContext } from '../UserContext';
import React from 'react';
import accountImage from '/src/assets/account-logo.png';

function AccountPage() {
   const {user, setUser}= useContext(UserContext);
   const [redirect, setRedirect] = useState(null)
  

  async function logout() {
    await axios.post('/logout');
    setRedirect('/');
    setUser(null);
  }


const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('/items').then(({data}) => {
      setItems(data);
    })
  }, [])

  if(redirect)
  {
    return <Navigate to={redirect}/>
  }

return (

  

<div className='font-serif'>
  <div className='pl-[2rem]  pt-6 flex  font-bold font-serif'>
    <img src={accountImage} className='w-[6rem] h-[6rem] shadow-2xl shadow-black bg-[#0C6164] rounded-full' />

    <div className='flex justify-center pl-0.7rem pt-3 text-[#0C6164] font-bold uppercase '>
      {!!user && <div className='pl-0.8rem '>{user.username}</div>}
    </div>
    </div>
    <div className='pl-[2rem]  pt-6 flex font-bold font-serif flex-box justify-end mr-10 sm:ml-4  py-4  text-xs text-[#0C6164]'>
      <button onClick={logout} className='shadow-2xl shadow-black border-2 px-5 py-1 rounded-full border-[#0C6164]'>
        Logout
      </button>
    </div>


  <div className='pl-4 pt-10 flex font-bold font-serif text-[#0C6164]'>Wardrobe</div>
  <hr className='border-b border-[#0C6164] my-5 mx-7 border-0.1 shadow-2xl shadow-black' />

 


  <div className=' cursor-pointer justify-center mt-4 grid  md:grid-cols-3 lg:grid-cols-5  text-[#0C6164]  '>

    {items.length > 0 && items.map((item,index) => (
      <Link to={'/account/' + item._id} key={index} className='shadow-2xl shadow-black ml-5 mt-2 mb-3 w-[15rem] h-[16rem] flex justify-center shrink-0 gap-4 border-2 border-[#0C6164] bg-slate-100 p-4 rounded-2xl'>
       
        <div className=''>
        {item.photos.length > 0 && (
          <img className= 'w-[20rem] h-[12rem] rounded-lg'src={'https://hype-friends-backend-production.up.railway.app/' + item.photos[0]} alt='photo'/>

        )}
        <hr className="border-b border-[#0C6164] my-2  border-0.1"></hr>
         <h2 className='font-bold text-center '>{item.title}</h2>
        </div>
      </Link>
    ))}
  </div>











</div>










  );
}

export default AccountPage;