import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className=" min-h-[calc(100vh-135px)] max-h-[calc(100vh-135px)] flex  mt-5">
      <aside className=" bg-white min-h-full w-full max-w-60 customShadow border-r-1">
        <div className=" h-32  flex justify-center items-center flex-col">
        <h1>dashboard</h1>
        </div>
        {/* ////navigation  */}
        <div>
          <nav className=" flex flex-col p-3">
            <Link
              to={"all-blogs"}
              className=" px-2 py-1 hover:bg-slate-200 rounded-lg"
            >
              All Blogs
            </Link>
            <Link
              to={"add-blogs"}
              className=" px-2 py-1 hover:bg-slate-200 rounded-lg"
            >
              Add Blogs
            </Link>
          </nav>
        </div>
      </aside>
      <main className=" w-full h-full ">
        <Outlet />
      </main>
    </div>
  )
}

export default Dashboard