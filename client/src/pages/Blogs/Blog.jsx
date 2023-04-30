import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BsDot } from 'react-icons/bs'


const Blog = () => {
  document.title = "Campus DAO | Blog";

  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  const getBlog = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:4000/api/blog/${blogId}`);
      // console.log(res.data);
      setBlog(res.data);
      setLoading(false);
    } catch (error) {
      alert("Something went wrong!")
    }
    // setLoading(false);
  }

  useEffect(() => {
    getBlog();
  }, [])



  return (
    <div>
      {
        loading ? <h1>Loading...</h1> :
          <div className='m-auto flex flex-col items-center justify-center'>
            <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold text-purple-500 my-10 mt-6'>{blog.name}</h1>

            <div className='flex items-center h-56 overflow-hidden lg:w-[70%] md:w-[80%] w-[85%] rounded-lg border border-gray-900'>
              <img className='w-full' src={blog.image} alt={blog.title} />
            </div>

            <div className='flex items-center p-5'>
              <p className='text-gray-400'>{blog.author}</p>
              <BsDot size={20} className='text-gray-300' />
              <p className='text-gray-400'>{new Intl.DateTimeFormat('en-AU').format(new Date(blog.date))}</p>
              <BsDot size={20} className='text-gray-300' />
              <p className='text-gray-400'>3 min read</p>
            </div>

            <div className='lg:w-[70%] md:w-[80%] w-[85%] text-lg mt-10'>
              <p className='text-gray-200'>{blog.description}</p>


              <p className='text-gray-400 text-base mt-4 mb-32'>Read the full blog <a className='text-blue-500' href={blog.link} target="_blank" rel="noopener noreferrer">here</a>.</p>
          </div>
        </div>
       }
    </div >
  )
}

export default Blog