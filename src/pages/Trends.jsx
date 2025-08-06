import React, { useEffect, useState } from 'react'
import SummaryApi from '../common/CommonApi'
import { Link } from 'react-router-dom'

const Trends = () => {
  const [allBlogs,setAllBlogs] = useState([])
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

  console.log('blogd',allBlogs)

  return (
    <div className=" py-4 px-8">
      <div>
        {
          allBlogs && (
            <div className=' flex flex-wrap gap-4 justify-between items-center'>
              {
                allBlogs.map((blog,index)=>{
                  return (
                    <div key={blog._id+index} className='  h-64 w-52 border rounded-md overflow-hidden'>
                      <div className=' w-full h-36'>
                        <img src={blog?.image} alt="" className=' h-full w-full' />
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