import { Link , Navigate} from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";


function RegisterPage() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

 async function registerUser(ev) {
    ev.preventDefault();
    try{
      await axios.post('/register', {
        firstname,
        lastname,
        username,
        email,
        password,
      });      
      console.log('test1');

      alert('Registration successful. Now you can log in');
      setRedirect(true);


    }
    catch(e){
      console.log(e);
      alert('Registration failed. Please try again');

    }
}

if(redirect){
  return <Navigate to={'/login'} />
}


  return(
   <div>
        
        <form className="max-w-md mx-auto pt-[3rem] justify-around font-bold font-serif " onSubmit={registerUser}>
          <div className="text-center py-0 text-[#0C6164] text-2xl"><a> Please Register</a> </div>

          <div className='py-2 justify-center flex'><input className='px-8 py-3 border-2 rounded-full border-[#0C6164] ' type="firstname" placeholder="First name"
          value={firstname}
          onChange={ev => setFirstName(ev.target.value)}
          /></div>
          <div className='justify-center flex'><input className='px-8 py-3 pt-3 border-2 rounded-full border-[#0C6164] ' type="lastname" placeholder="Last name" 
          value={lastname} onChange={ev => setLastName(ev.target.value)}
          /></div>
          
          <div className='py-2 justify-center flex'><input className='px-8 py-3 pt-3 border-2 rounded-full border-[#0C6164] ' type="username" placeholder="Username" 
          value={username} onChange={ev => setUsername(ev.target.value)}
          /></div>
        
          <div className='py-2 justify-center flex'><input className='px-8 py-3 border-2 rounded-full border-[#0C6164] ' type="email" placeholder="E-mail"
          value={email} onChange={ev => setEmail(ev.target.value)}
          /></div>
          <div className='py-2 justify-center flex'><input className='px-8 py-3 border-2 rounded-full border-[#0C6164] ' type="password" placeholder="Password"
          value={password} onChange={ev => setPassword(ev.target.value)}
          /></div>

         <div className='justify-center flex py-2 text-[#0C6164]'> <button className='border-2 px-8 py-3 rounded-full border-[#0C6164]'>Register</button> </div>
          <div className="text-center py-2 text-[#0C6164] font-light ">
            Do you already have an account? <Link className=" text-[#0C6164] font-bold text-l" to={'/login'}>Login now</Link>
          </div>
        </form>
    </div>
  );
}

export default RegisterPage;