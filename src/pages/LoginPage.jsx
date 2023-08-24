import { Link, Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from "axios";
import { UserContext } from '../UserContext';


function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(null);
  const {setUser} = useContext(UserContext);

  async function handleLoginSubmit(ev)
  {
    ev.preventDefault();
    try{
      const {data} = await axios.post('/login', {username,password});
      alert('Login successful!:)')
      setUser(data);
      setRedirect('/account');
    } catch(e){
      alert('Login failed. Try again!')
    }
  }


if(redirect){
  return <Navigate to={'/account'} />
}


return (
   <div>
        
       <form className="max-w-md mx-auto pt-[7rem] justify-around font-bold font-serif " onSubmit={handleLoginSubmit}>
          <div className="text-center py-0 text-[#0C6164] text-2xl"><a> Please log in</a> </div>
          <div className='py-3 justify-center flex'>
          <input className='px-8 py-3 border-2 rounded-full border-[#0C6164] ' type="username" placeholder="Username"
          value={username} onChange={ev => setUsername(ev.target.value)}
          /></div>
          <div className='justify-center flex'><input className='px-8 py-3 pt-3 border-2 rounded-full border-[#0C6164] ' type="password" placeholder="Password" 
          value={password} onChange={ev => setPassword(ev.target.value)}
          /></div>
         <div className='justify-center flex py-8 text-[#0C6164]'>
          <button className='border-2 px-8 py-3 rounded-full border-[#0C6164]'>Login</button> </div>
          <div className="text-center py-2 text-[#0C6164] font-light ">
            Don't have an account yet? <Link className=" text-[#0C6164] font-bold text-l" to={'/register'}>Register now</Link>
          </div>
        </form> 





    </div>
  );
}

export default LoginPage;