import React, { useEffect, useState } from 'react'

const JobPage = () => {
    const [job,setJob]=useState(null);
    useEffect (() => {
        const fetchJob = async () => {
            try {
              const res= await fetch(/api/job);
              const data = await res.json();
              setJob(data);

            } catch (error) {
               console.log('Error fetching data',error);

            } finally {
            setLoading(false);
           }
           fetchJob();

        }
    })
  return (
    <div>JobPage</div>
  )
}

export default JobPage