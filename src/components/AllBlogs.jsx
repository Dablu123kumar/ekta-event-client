import React, { useEffect, useState } from "react";
import SummaryApi from "../common/CommonApi";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import EditBlog from "./EditBlog";


const AllBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [openEditBlog, setOpenEditBlog] = useState(false)
  const fetchAllBlogs = async () => {
    const response = await fetch(SummaryApi.getBlogAll.url, {
      method: SummaryApi.getBlogAll.method,
    });
    const blogsData = await response.json();
    if (blogsData.success) {
      setAllBlogs(blogsData.data);
    }
    //console.log('blogs ',blogsData.data)
  };

  // delete blog
  const deleteBlog = async (id)=>{
    console.log('id',id)
    const response = await fetch(SummaryApi.deleteBlog.url + id, {
      method: SummaryApi.deleteBlog.method,
    });
    const data = await response.json();
    if (data.success) {
      toast.success(data.message)
      setAllBlogs(allBlogs.filter(blog => blog._id !== id));
      fetchAllBlogs();
    }
    else{
      toast.error(data.message)
    }
  }

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  console.log("blogd", allBlogs);

  return (
    <div className="min-h-[calc(100vh-155px)] max-h-[calc(100vh-155px)]  py-2 px-4">
      <div>
        {allBlogs && (
          <div className=" flex flex-wrap gap-4 justify-between items-center">
            {allBlogs.map((blog, index) => {
              return (
                <div
                  key={blog._id + index}
                  className=" relative group h-56 w-40 border rounded-md overflow-hidden"
                >
                  <div className=" w-full h-24">
                    <img src={blog?.image.url} alt="" className=" h-full w-full" />
                  </div>
                  <div className=" p-2">
                    <h1 className=" text-center font-medium text-ellipsis line-clamp-1">{blog?.title} </h1>
                    <p className=" text-sm text-neutral-600 text-ellipsis line-clamp-2">
                      {" "}
                      {blog?.description}{" "}
                    </p>
                  </div>
                  <div className=" absolute bottom-2 hidden group-hover:flex justify-between items-center w-full px-2">
                    <Link onClick={()=> setOpenEditBlog(true)} to={`/dashboard-admin/edit-blog/${blog?._id}`} className=" p-1  border rounded-full border-green-500 text-green-800 hover:bg-green-800 hover:text-white font-medium">
                     <MdEdit size={25} />
                    </Link>
                    <button onClick={() => deleteBlog(blog?._id)} className=" p-1  border rounded-full border-red-500 text-red-800 hover:bg-red-800 hover:text-white font-medium cursor-pointer">
                      <MdDelete size={25} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {openEditBlog && (
        <EditBlog/>
      )}
    </div>
  );
};

export default AllBlogs;

