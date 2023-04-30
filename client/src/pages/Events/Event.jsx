import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';

const Event = () => {
  document.title = "Campus DAO | Event";

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  document.title = "Campus DAO | Projects";

  const getEvents = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://campuscrate-production-babe.up.railway.app/api/events');
      setEvents(res.data);
      // console.log(res.data);
    } catch (error) {
      alert("Something went wrong!")
    }
    setLoading(false);
  }

  useEffect(() => {
    getEvents();
  }, [])

  return (
    <div className='m-auto flex flex-col items-center justify-center'>
      <h1 className='lg:text-4xl text-3xl font-bold text-purple-500 mb-10 mt-6'>Our Upcoming DAO Events</h1>
      <div className='flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32'>
        {loading ? <div>loading...</div> : events.map((project, id) => (
          <EventCard data={project} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Event