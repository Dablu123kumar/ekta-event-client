import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common/CommonApi';
import { toast } from 'react-toastify';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Call your signup API here
    const response = await fetch(`${SummaryApi.signUp.url}`,{
        method : SummaryApi.signUp.method,
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formData)
    })
    const resData = await response.json()
    if(resData.success){
        toast.success(resData.message)
        navigate('/admin-login')
        console.log('sdata',resData)
    }
    else{
          toast.error(resData.message)
        }
    //console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white cursor-pointer py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account? <Link to={'/admin-login'} className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
