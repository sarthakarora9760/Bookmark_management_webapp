import React from 'react'
import { useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setusername } from '../redux/username/usernameSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const baseurl="https://bookmarkmanager-wg1i.onrender.com/api"
const signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleRegister = async () => {
      try {
        await axios.post(`${baseurl}/register`, { username, password });
        setMessage('User registered successfully');
      } catch (error) {
        setMessage(error.response.data.message);
      }
    };
  
    const handleLogin = async () => {
      try {
        const response = await axios.post(`${baseurl}/login`, { username, password });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        setMessage('Logged in successfully');
        dispatch(setusername(username))
        navigate("/app") 
      } catch (error) {
        setMessage(error.response.data.message);
      }
    };
  
    const handleProtectedRoute = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${baseurl}/protected`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setMessage(response.data.message);
      } catch (error) {
        setMessage(error.response.data.message);
      }
    };
  
    return (
      <div className='bg-black opacity-80 text-white p-[15%]'>
        <h1 className='text-center font-bold text-2xl'>Manage your bookmarks with us</h1>
        <div className="inputs flex flex-col items-center justify-center w-full gap-6 mt-6 rounded-xl">
        <input className='px-2 text-black' type="email" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="px-2 text-black" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="flex flex-col gap-6 w-full items-center justify-center mt-4">
        <button className='bg-gray-800 text-white rounded-xl p-2' onClick={handleRegister}>Register</button>
        <button className='bg-gray-800 text-white rounded-xl p-2' onClick={handleLogin}>Login</button>
        </div>
        <p className='text-center text-xl'>{message}</p>
      </div>
    );
  }
  
  export default signup;