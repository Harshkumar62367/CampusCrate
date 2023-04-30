import React from 'react'

const BountyCard = ({ data, setSubmitPopup, id }) => {
  return (
    <div className='lg:w-[75%] md:w-[80%] w-[95%] p-4 border-2 hover:border-gray-800 hover:scale-[102%] transition-all delay-75 ease-in border-gray-900 rounded-2xl mt-5'>
      <div className='flex items-start gap-5'>
        <div className='flex items-center h-16 overflow-hidden w-24 rounded-lg border border-gray-900'>
          <img className='w-full' src={data.image} alt={data.name} />
        </div>

        <div>
          <h3 className='text-xl font-semibold pl-2'>{data.name}</h3>
          <p className='text-gray-400 pt-2 pl-2'>{data.clubName}</p>
        </div>
      </div>


      <p className='text-gray-400 pt-2 pl-2'>{data.description}</p>
      <div className='bg-gray-800 rounded-lg p-3 flex justify-between mt-4 flex-col'>
        <div>
          <p className='text-gray-400 text-sm'>Status</p>
          <p className='text-medium'>{data.status}</p>
        </div>

        <div className='mt-2 flex justify-between items-end'>
          <div>
            <p className='text-gray-400 text-sm'>Tech Stacks</p>
            <div className='flex items-center gap-2'>
              {
                data.techStack.map((stack, id) => (
                  <p className='text-medium' key={id}>{stack + (id !== data.techStack.length - 1 ? "," : '')}</p>
                ))
              }
            </div>
          </div>
          <button onClick={()=>setSubmitPopup(id)} className='text-gray-900 bg-white px-6 py-1.5 rounded-xl font-medium border border-white hover:bg-gray-900 hover:text-white'>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default BountyCard