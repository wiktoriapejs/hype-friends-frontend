
 import { useContext } from 'react';
 import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import logoImage from '/src/assets/main-logo.png'
import accountImage from '/src/assets/account-logo.png';
import messageImage from '/src/assets/message-logo.png';



 function Header() {
  const {user}= useContext(UserContext);

  const dropDownMenuRef = useRef(null);

  function handleToggleClick() {
    dropDownMenuRef.current.classList.toggle('open');
    
  }
  function handleLinkClick() {
    dropDownMenuRef.current.classList.remove('open');
  }



  return (
  
    
    <div>
    {/* LOGO */}
    <header className='flex justify-between bg-[#0c6164]'>
      <Link to={'/'} href='' className='flex justify-between'>
        <img src={logoImage} className='w-[14rem] h-[6rem] mx-3 mt-2' alt='logo' />
      </Link>
  
      {/* RENT/LEND BUTTONS */}
     <div className='nav-links flex justify-center items-center text-white lg:gap-10   sm:gap-5 sm:text-md lg:text-3xl font-mediumbold  font-text'>
        <button className=''>
          <Link to={'/rent'}>Rent</Link>
        </button>
        <button className=' '>
          <Link to={'/list_item'}>Lend</Link>
        </button>
      </div> 
  

  
      {/* LOGIN/REGISTER BUTTONS */}
      <div className='nav-links flex justify-end items-center text-white gap-1 font-mediumbold lg:text-3xl sm:text-sm pr-6 font-text'>
        <button>
          {user ? (
            <Link to='/bookings'>
              <img src={messageImage} className='w-[5rem] h-[4rem] mx-3 mt-2' alt='message' />
            </Link>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </button>
  
        <button>
          {user ? (
            <Link to='/account'>
              <img src={accountImage} className='w-[5rem] h-[4rem] mx-3 mt-2' alt='account' />
            </Link>
          ) : (
            <Link to='/register'> / Register</Link>
          )}
        </button>
      </div>

<div onClick={handleToggleClick} className='toggle_btn text-white  '>
<i className="fa fa-bars text-white"></i>
</div>

<div ref={dropDownMenuRef} className='dropdown_menu }'>
 {/* RENT/LEND BUTTONS */}
 <div className='dropdown-links'>
        <button onClick={handleLinkClick}>
          <Link to={'/rent'}>Rent</Link>
        </button>
        <button onClick={handleLinkClick}>
          <Link to={'/list_item'}>Lend</Link>
        </button>
     
      {/* LOGIN/REGISTER BUTTONS */}
        <button onClick={handleLinkClick}>
          {user ? (
            <Link to='/bookings'>
              Bookings
            </Link>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </button>
  
        <button onClick={handleLinkClick}>
          {user ? (
            <Link to='/account'>
              Account
              </Link>
          ) : (
            <Link to='/register'> Register</Link>
          )}
        </button>
        </div>
      </div>
     

    
    </header>
  </div>


   
  );
}

export default Header;