import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

const Blogs = () => {
    document.title = "Campus DAO | Blogs";

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const getBlogs = async () => {
        setLoading(true);
        try {
            const res = await axios.get('http://localhost:4000/api/blogs');
            setBlogs(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error.message)
        }
        setLoading(false);
    }

    useEffect(() => {
        getBlogs();
    }, [])

    return (
        <div className='m-auto flex flex-col items-center justify-center'>
            <h1 className='lg:text-4xl md:text-3xl text-3xl font-bold text-purple-500 my-10 mt-6'>Our DAO Community Blogs</h1>
            <div className='flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32'>
                {loading ? <div>loading...</div> : blogs.map((project, id) => (
                    <BlogCard data={project} key={id} />
                ))}
            </div>
        </div>
    )
}

export default Blogs