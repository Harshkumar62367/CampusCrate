import React from 'react'
import { ProjectCard } from './../components/index'


const Project = ({ data,setProjectDetailPopup,id }) => {
    return (
        <div onClick={()=> setProjectDetailPopup(id)} className='w-[21rem] p-4 border-2 hover:border-gray-800 hover:scale-[102%] transition-all delay-75 ease-in border-gray-900 rounded-2xl mt-5'>
            <div className='flex items-center h-44 overflow-hidden w-full rounded-lg border border-gray-900'>
                <img className='w-full' src={data.image} alt={data.name} />
            </div>
            <p className='text-gray-400 pt-2 pl-2'>{data.clubName}</p>
            <h3 className='text-xl font-semibold pl-2'>{data.name}</h3>
            <div className='bg-gray-800 rounded-lg p-3 flex justify-between mt-4'>
                <div>
                    <p className='text-gray-400 text-sm'>Status</p>
                    <p className='text-medium'>{data.status}</p>
                </div>

                <div>
                    <p className='text-gray-400 text-sm'>Project Type</p>
                    <p className='text-medium'>{data.projectType}</p>
                </div>
            </div>
        </div>
    )
}

export default Project