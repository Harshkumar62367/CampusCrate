import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProjectCard } from '../../components';


const Projects = () => {

    const [projects, setProjects] = useState([]);

    const getProjects = async () => {

        try {
            const res = await axios.get('http://localhost:4000/api/projects');
            setProjects(res.data);
            // console.log(res.data);
        } catch (error) {
            alert("Something went wrong!")
        }
    }

    useEffect(() => {
        getProjects();
    }, [])

    return (
        <div className='m-auto flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold text-purple-500 mb-10 mt-6'>Our Campus DAO Projects</h1>
            <div className='flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32'>
                {projects.map((project, id) => (
                    <ProjectCard data={project} key={id} />
                ))}
            </div>
        </div>
    )
}

export default Projects