import React, { useEffect, useState } from 'react'
import SummaryApi from '../common/CommonApi'
import { Link, useNavigate } from 'react-router-dom'

const Trends = () => {
  const [allBlogs,setAllBlogs] = useState([])
  const navigate = useNavigate()
  const fetchAllBlogs = async () =>{
    const response = await fetch(SummaryApi.getBlogAll.url,{
      method : SummaryApi.getBlogAll.method,
    })
    const blogsData = await response.json()
    if(blogsData.success){
      setAllBlogs(blogsData.data)
    }
    //console.log('blogs ',blogsData.data)
  }

  useEffect(()=>{
    fetchAllBlogs()
  },[])

  // redirect to blog details page
  const handleRedirect = (id) =>{
    navigate(`/blog-details/${id}`)
  }

  console.log('blogd',allBlogs)

  return (
    <div className=" py-2 px-6 sm:py-4 sm:px-8">
      <div>
        {
          allBlogs && (
            <div className=' flex flex-wrap gap-4 justify-center sm:justify-between items-center cursor-pointer'>
              {
                allBlogs.map((blog,index)=>{
                  return (
                    <div onClick={()=>handleRedirect(blog?._id)}  key={blog._id+index} className='h-72  sm:h-64 w-full sm:w-52 border rounded-md overflow-hidden'>
                      <div className=' w-full h-48 sm:h-36'>
                        <img src={blog?.image.url} alt="" className=' h-full w-full' />
                      </div>
                       <div className=' p-2'>
                        <h1 className=' text-center font-medium'>{blog?.title} </h1>
                        <p className=' text-sm text-neutral-600 text-ellipsis line-clamp-2'> {blog?.description} </p>
                       </div>
                     
                    </div>
                  )
                })
              }
            </div>
          )
        }
      </div>
    </div>)
}

export default Trends