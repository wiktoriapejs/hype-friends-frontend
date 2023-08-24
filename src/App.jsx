import './App.css'
import {Route, Routes} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RentPage from './pages/RentPage';
import IndexPage from './pages/IndexPage';
import AccountPage from './pages/AccountPage';
import ListPage from './pages/ListPage';
import ItemPage from './pages/ItemPage';
import BookingsPage from './pages/BookingsPage';
import {UserContextProvider} from "./UserContext";
import Layout from './Layout';
import axios from "axios";
// axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;
axios.defaults.baseURL ='http://localhost:4000';
function App() {
  return (
  <UserContextProvider>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/rent' element={<RentPage />} />
          <Route path='/rent/:id' element={<ItemPage />} />
          <Route path='/account' element={<AccountPage />} />
          <Route path='/account/:id' element={<ListPage />} />
          <Route path='/list_item' element={<ListPage />} />
          <Route path='bookings' element={<BookingsPage />} />


          </Route>
          
      </Routes>
  </UserContextProvider>
  )
}

export default App