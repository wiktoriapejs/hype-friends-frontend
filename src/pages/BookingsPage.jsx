import axios from "axios";
import { useEffect, useState } from "react"
// import ItemImg from "../ItemImg";
import {Link} from "react-router-dom";
import BookingDates from "../BookingDates";
import ItemGallery from "../ItemGallery";



export default function BookingsPage(){
    
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
      axios.get('/bookings').then(response => {
        setBookings(response.data)
      })
    }, []);





return (

  
    <div>
      <div className='font-serif text-[#0C6164] flex flex-col gap-5 m-10 items-center '>
      <p className="text-2xl mt-4 justify-center font-bold ">Bookings </p>
      {bookings?.length > 0 &&
      bookings.map((booking, index) => (
        <div
          key={index}
          className="bookings-border  bg-white  border-2  border-[#0C6164] shadow-2xl shadow-black  rounded-3xl"
        >
          <div className="w-48  object-cover items-center">
            <ItemGallery item={booking.item} />
          </div>

          <div className="booking-info ">
            <h2 className="text-xl">{booking.item?.title}</h2>
            <div className="text-xl">
              <BookingDates booking={booking} />

              <div className="flex gap-1 booking-price">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
               
                 Total price: ${booking.price}
               
              </div>

          
            </div>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  

)

        
    }