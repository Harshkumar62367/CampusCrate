import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BountyCard from './BountyCard';
import {useAddress} from "@thirdweb-dev/react";

const Bounties = () => {
  document.title = "Campus DAO | Bounties";
  const address = useAddress();
  const [bounties, setBounties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitPopup, setSubmitPopup] = useState(-1);
  const [formData, setFormData] = useState({
    projectLiveUrl: '',
    githubUrl: '',
    picsUrl: '',
  });


  document.title = "Campus DAO | Projects";

  const getBounties = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:4000/api/bounties');
      setBounties(res.data);
      // console.log(res.data);
    } catch (error) {
      alert("Something went wrong!")
    }
    setLoading(false);
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    // const data = formData;
    // // data.address = address;
    // data.bountyId = submitPopup;
    // console.log(e.target[1].value);
    setSubmitPopup(-1);
    alert("Your submission has been recorded!");
  }

  useEffect(() => {
    getBounties();
  }, [])

  return (
    <div className='m-auto flex flex-col items-center justify-center'>
      {
       Number(submitPopup) > -1 && (
          <div className='fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center z-[23242424]'>
            <div className='bg-gray-900 p-10 rounded-xl'>
              <h1 className='text-2xl font-bold text-purple-500 mb-10 mt-6'>Submit Bounty</h1>
              <form onSubmit={handleSubmit}  className='flex flex-col gap-4'>
                <input required={true} disabled={true} className='border-2 bg-gray-800 border-gray-500 rounded-lg p-2' value={bounties[submitPopup].name} type="text" placeholder='Project Name' />
                <input required={true} value={formData.githubUrl} onChange={(e)=>setFormData(e.target.value)} className='border-2 bg-gray-800 border-gray-500 rounded-lg p-2' type="text" placeholder='Project Github URL' />
                <input required={true} value={formData.projectLiveUrl} onChange={(e)=>setFormData(e.target.value)} className='border-2 bg-gray-800 border-gray-500 rounded-lg p-2' type="text" placeholder='Project Live URL' />
                <input required={true} value={formData.picsUrl} onChange={(e)=>setFormData(e.target.value)} className='border-2 bg-gray-800 border-gray-500 rounded-lg p-2' type="text" placeholder='Project Image URL' />
                <button type='submit' className='bg-purple-500 text-white rounded-lg p-2'>Submit</button>
              </form>
            </div>
          </div>
        )
      }
      <h1 className='text-3xl font-bold text-purple-500 mb-10 mt-6'>Earn $ by completing Bounties</h1>
      <div className='flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32'>
        {loading ? <div>loading...</div> : bounties.map((project, id) => (
          <BountyCard setSubmitPopup={setSubmitPopup} data={project} id={id}/>
        ))}
      </div>
    </div>
  )
}

export default Bounties