import { useState } from "react"
import {differenceInCalendarDays } from 'date-fns'
import axios from "axios";
import {Navigate} from "react-router-dom";


export default function BookingWidget({item}){
   
  const[from, setFrom] = useState('');
  const [to, setTo] = useState('');

  
  const [address, setAddress] = useState('')
   const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');

  const [redirect, setRedirect] = useState('');

  // const [showConfirmation, setShowConfirmation] = useState(false);

  let numberOfDays = 0;
  if( from && to){
    numberOfDays = differenceInCalendarDays(new Date(to), new Date(from));
  }


async function bookThisItem(ev){
  ev.preventDefault();
  const bookingData =  {from, to, address, name, cardNumber, cvv,
    item: item._id,
    price: numberOfDays * item.price,
  }
  await axios.post('/bookings', bookingData);
//  const bookingId = response.data._id;
 setRedirect(true )
}

if(redirect)
{
return <Navigate to={'/bookings' } />
}








  return(
       
       <div className=" text-center justify-center mt-6 bg-[#E5EEEE] shadow-xl p-4 rounded-2xl">
                        <div className="text-center text-xl">Book <span className="font-bold">{item.title}</span></div>
                        <div className="shadow shadow-grey mt-4 bg-white border py-4  px-4 rounded-2xl">
                          <label className="font-bold">From: </label>
                          <input type="date"
                                 value={from}
                                 onChange={ev => setFrom(ev.target.value)}/>
                        </div>
                        <div className=" bg-white border shadow shadow-grey py-4  px-4 rounded-2xl mt-2">
                          <label className="font-bold">To: </label>
                          <input type="date"
                                 value={to} 
                                 onChange={ev => setTo(ev.target.value)}/>
                        </div>
                        


                        <div>
                      {numberOfDays > 0 && (
                        <div className="py-3 px-4 border-t">
                          

                                 <label>Address:</label>
                          <input type='text-book'
                                 value={address}
                                 onChange={ev => setAddress(ev.target.value)}/>

                          

                        <label>Your full name:</label>
                          <input type='text-book'
                                 value={name}
                                 onChange={ev => setName(ev.target.value)}/>

                          <label>Card number:</label>
                          <input type='text-book'
                                 value={cardNumber}
                                 onChange={ev => setCardNumber(ev.target.value)}/>

                                 <label>Cvv: </label>
                          <input type='text' className="w-20 border my-1 py-2 px-3 rounded-full"
                                 value={cvv}
                                 onChange={ev => setCvv(ev.target.value)}/>


                        </div>
                      )}

                        </div>
                        



                        <button  onClick={bookThisItem} className="bg-white text-center shadow shadow-black mt-4 border-2 px-20 py-3 rounded-full border-[#0C6164]">
                          Book this item for:
                          {numberOfDays > 0 && (
                            <span className="font-bold"> £{numberOfDays * item.price}</span>
                          )}
                          
                          </button>
                      </div>
    )
    
                          }