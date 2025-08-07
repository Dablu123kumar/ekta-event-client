
import  { useState } from 'react';
import { toast } from 'react-toastify';
import SummaryApi from '../common/CommonApi';
import ImageToBase64 from '../helper/ImageToBase64';
import { useNavigate } from 'react-router-dom';

const AddBlog =  () => {
  const [formData, setFormData]= useState({
    title : "", 
    description : '', 
    image : ''
  })
 
  const navigate = useNavigate()
  const handleOnchange = (e) =>{
    const {name, value} = e.target;
    setFormData((prev)=>{
      return {...prev, [name] : value}
    })

  }
  // handle image change
   const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await ImageToBase64(file);
      setFormData((prev) => ({ ...prev, image: base64 }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(SummaryApi.addBlog.url, {
        method: SummaryApi.addBlog.method,
        headers :{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        navigate('/dashboard-admin/all-blogs');
      } else {
        alert(data.message || 'Something went wrong');
      }
    } catch (err) {
      toast.error('Server error. Try again later.');
      console.error(err);
    }
  };

  return (
    <div className="max-w-lg mx-auto  p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:outline-none"
            name='title'
            value={formData.title}
            onChange={handleOnchange}
            placeholder="Enter blog title"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md focus:ring focus:outline-none"
            name='description'
            value={formData.description}
            onChange={handleOnchange}
            placeholder="Write your blog content here"
            rows={5}
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Image</label>
          <input
            type="file"
            accept="image/*"
            name='image'
            onChange={handleImageChange}
            className="w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
