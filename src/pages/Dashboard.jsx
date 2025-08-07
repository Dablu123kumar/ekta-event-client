import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className=" min-h-[calc(100vh-135px)] max-h-[calc(100vh-135px)] flex  mt-2 ">
      <aside className=" bg-white min-h-full w-full max-w-60  border-r-1 border-gray-400">
        <div className=" h-32  flex justify-center items-center flex-col text-xl font-semibold border-b-1 border-gray-400">
        <h1>Admin Dashboard</h1>
        </div>
        {/* ////navigation  */}
        <div>
          <nav className=" flex flex-col p-3 font-medium">
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
      <main className=" min-h-[calc(100vh-135px)] max-h-[calc(100vh-135px)] w-full py-2 overflow-y-scroll ">
        <Outlet />
      </main>
    </div>
  )
}

export default Dashboard