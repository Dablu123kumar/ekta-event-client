
import  { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SummaryApi from '../common/CommonApi';
import ImageToBase64 from '../helper/ImageToBase64';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CgCloseO } from "react-icons/cg";


const EditBlog =  () => {

  const [formData, setFormData]= useState({
    title : "", 
    description : '', 
    image : null
  })
  const {id} = useParams()
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

  // fetch blog details
  const fetchBlogDetails = async ()=>{
    try {
        const response = await fetch(SummaryApi.BlogDetails.url + id,{
            method : SummaryApi.BlogDetails.method
        })
        const resData = await response.json();
        if (resData.success) {
            console.log(resData.data)
          setFormData(resData.data);
        } else {
          toast.error(data.message );
        }
    } catch (error) {
      toast.error( error);
        
    }
  }

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(SummaryApi.updateBlog.url + id, {
        method: SummaryApi.updateBlog.method,
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        navigate('/dashboard-admin/all-blogs');
        fetchBlogDetails()
      } else {
        alert(data.message);
      }
    } catch (err) {
      toast.error('Server error. Try again later.');
      console.error(err);
    }
  };


  useEffect(()=>{
    fetchBlogDetails()
  },[])

  return (
    <div className=" relative max-w-lg mx-auto  p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Blog</h2>
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
          Update Blog
        </button>
      </form>
      <Link to={'/dashboard-admin/all-blogs'}  className=' absolute top-2 right-3 cursor-pointer'><CgCloseO size={25} /></Link>
    </div>
  );
};

export default EditBlog
