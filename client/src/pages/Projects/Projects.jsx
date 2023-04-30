import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProjectCard } from '../../components';


const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [projectDetailPopup, setProjectDetailPopup] = useState(-1);
    document.title = "Campus DAO | Projects";

    const getProjects = async () => {
        setLoading(true);
        try {
            const res = await axios.get('http://localhost:4000/api/projects');
            setProjects(res.data);
            // console.log(res.data);
        } catch (error) {
            alert("Something went wrong!")
        }
        setLoading(false);
    }

    useEffect(() => {
        getProjects();
    }, [])

    return (
        <div className='m-auto flex flex-col items-center justify-center'>
            {
                projectDetailPopup > -1 && <div className='fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50 flex items-center justify-center'>
                    <div className='bg-gray-900 p-6 rounded-lg lg:w-[75%] md:w-[85%] w-[95%]'>
                        <h1 className='text-2xl font-bold text-purple-500 mb-5'>Project Details</h1>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-5'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-xl font-bold text-purple-500'>Project Name</h1>
                                    <p className='text-lg font-semibold'>{projects[projectDetailPopup].name}</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-xl font-bold text-purple-500'>Project Image</h1>
                                    <img src={projects[projectDetailPopup].image} alt={projects[projectDetailPopup].name} className='h-24 w-48' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-xl font-bold text-purple-500'>Project Description</h1>
                                <p className='text-base font-semibold'>{projects[projectDetailPopup].description}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-lg font-bold text-purple-500'>Project Link</h1>
                                <a target='_blank' href={projects[projectDetailPopup].link} className='text-base text-blue-500'>{projects[projectDetailPopup].link}</a>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-lg font-bold text-purple-500'>Project Contributors</h1>
                                <div className='flex flex-wrap gap-2'>
                                    {projects[projectDetailPopup].contributors.map((contributor, id) => (
                                        <div className='bg-gray-800 rounded-lg p-2' key={id}>
                                            <p className='text-base font-semibold'>{contributor}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-lg font-bold text-purple-500'>Project Tech Stack</h1>
                                <div className='flex flex-wrap gap-2'>
                                    {projects[projectDetailPopup].techStack.map((contributor, id) => (
                                        <div className='bg-gray-800 rounded-lg p-2' key={id}>
                                            <p className='text-base font-semibold'>{contributor}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button className='bg-purple-500 text-white px-4 py-2 rounded-lg mt-5' onClick={() => setProjectDetailPopup(-1)}>Close</button>
                    </div>
                </div>
            }
            <h1 className='lg:text-4xl text-3xl font-bold text-purple-500 mb-10 mt-6'>Our Campus DAO Projects</h1>
            <div className='flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32'>
                {loading ? <div>loading...</div> : projects.map((project, id) => (
                    <ProjectCard setProjectDetailPopup={setProjectDetailPopup} id={id} data={project} key={id} />
                ))}
            </div>
        </div>
    )
}

export default Projects