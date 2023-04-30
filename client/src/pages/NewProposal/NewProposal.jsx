import React, { useState } from 'react'
import { useAddress } from '@thirdweb-dev/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewProposal = () => {

  const address = useAddress();
  const navigate = useNavigate();
  document.title = "Campus DAO | New Proposal";

  const [creating, setCreating] = useState(false);

  const [formdata, setFormData] = useState({
    description: '',
    address,
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formdata.description) return alert('Please enter a title');
    setCreating(true);
    try {
      const response = await axios.post('https://campuscrate-production-babe.up.railway.app/api/create-proposal', formdata);
      console.log(response);
      setFormData({
        description: '',
        address,
      })
    } catch (error) {
      console.log(error);
    }
    setCreating(false);
    navigate('/dashboard');
  }

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <h1 className='text-4xl text-purple-500 font-bold mb-16 text-center'>Create New Proposal</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label htmlFor="description" className='text-lg font-medium'>Title</label>
          <textarea onChange={(e) => setFormData({
            ...formdata,
            description: e.target.value
          })} value={formdata.description} className='px-2 py-2 h-[10rem] lg:w-[27rem] md:w-[23rem] w-[18rem] border-gray-700 text-gray-300 bg-gray-900 rounded-xl mt-2' type="description" name="description" />
        </div>

        <button type="submit" className='bg-gray-900 rounded-full border text-purple-200 border-gray-800 py-2.5 px-7 mt-10'>{
          creating ? 'Creating...' : 'Create'
        }</button>
      </form>
    </div>
  )
}

export default NewProposal