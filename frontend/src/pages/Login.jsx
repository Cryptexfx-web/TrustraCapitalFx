import { useState } from 'react';
import api from '../services/api';

export default function Login() {
  const [form, setForm] = useState({});

  const login = async () => {
    const res = await api.post('/auth/login', form);
    localStorage.setItem('token', res.data.token);
    alert('Logged in');
  };

  return (
    <>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>
      <button onClick={login}>Login</button>
    </>
  );
}
