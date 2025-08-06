import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common/CommonApi';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Call your login API here
    const response = await fetch(`${SummaryApi.login.url}`,{
        method : SummaryApi.login.method,
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({email, password})
    })
    const resData = await response.json()
    if(resData.success){
        console.log('data',resData.data)
        if(resData.data.role === 'ADMIN'){
            toast.success(resData.message)
            navigate('/dashboard-admin/all-blogs')
        }
    }
    //console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-600">
          Don't have an account? <Link to={'/admin-signup'} className="text-blue-500 hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
