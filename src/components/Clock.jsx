import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className=' md:text-left text-center'>
      <h1 className='text-primary-color font-semibold text-lg'>{time.getHours()}:{time.getMinutes()}</h1>
      <p>{time.toDateString()}</p>
    </div>
  );
}

export default Clock;