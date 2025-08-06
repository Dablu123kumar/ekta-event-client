import React, { useEffect, useState } from 'react'
import SummaryApi from '../common/CommonApi'
import { Link } from 'react-router-dom'

const AllBlogs = () => {
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
    <div className="min-h-[calc(100vh-135px)] max-h-[calc(100vh-135px)]">
      <div>
        {
          allBlogs && (
            <div className=' flex flex-wrap gap-4 justify-center items-center'>
              {
                allBlogs.map((blog,index)=>{
                  return (
                    <div key={blog._id+index} className=' relative group h-56 w-40 border rounded-md overflow-hidden'>
                      <div className=' w-full h-24'>
                        <img src={blog?.image} alt="" className=' h-full w-full' />
                      </div>
                       <div className=' p-2'>
                        <h1 className=' text-center font-medium'>{blog?.title} </h1>
                        <p className=' text-sm text-neutral-600 text-ellipsis line-clamp-2'> {blog?.description} </p>
                       </div>
                       <div className=' absolute bottom-2 hidden group-hover:flex justify-between items-center w-full px-2'>
                        <Link className=' py-1 px-3 border rounded-md border-green-500 text-green-800 hover:bg-green-800 hover:text-white font-medium'>edit</Link>
                        <button className=' py-1 px-3 border rounded-md border-red-500 text-red-800 hover:bg-red-800 hover:text-white font-medium'>delet</button>
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

export default AllBlogs