import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SummaryApi from '../common/CommonApi'
import AllBlogs from './AllBlogs'
import Trends from '../pages/Trends'

const BlogDetails = () => {
    const [formData, setFormData] = useState([])
    const {id} = useParams()
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

  useEffect(()=>{
    fetchBlogDetails()
  },[id])

  return (
    <div>
       <div className=' w-full flex flex-col sm:flex-row justify-center items-center sm:items-start sm:justify-between gap-5  sm:gap-10 py-2 px-4 sm:py-4 sm:px-8 bg-gray-50'>
         <div className=' w-full sm:w-1/2 h-80 rounded-md overflow-hidden shaddow-lg'>
            <img src={formData?.image?.url} alt="" className=' w-full' />
        </div>
        <div className=' w-full sm:w-1/2 space-y-1 sm:space-y-2'>
            <h1 className=' text-xl font-bold '>{formData?.title} </h1>
            <p className='font-medium'> Description : <span className=' text-neutral-700 text-sm'>{formData?.description}</span> </p>
        </div>
       </div>
       <Trends/>
    </div>
  )
}

export default BlogDetails