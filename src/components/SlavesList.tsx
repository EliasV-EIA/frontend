import  { useEffect, useState } from 'react';
import axios from 'axios';

const SlavesList = () => {
  const [slaves, setSlaves] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('https://partial-backend.onrender.com/slaves') // Ensure this points to your backend endpoint
      .then((response) => {
        setSlaves(response.data);
      })
      .catch((error) => {
        console.error('Error fetching slaves', error);
      });
  }, []);

  return (
    <div>
      <a href='/'>Return to home page</a>
      <h2>All Slaves</h2>
       <a href='/add-slave'>Add slave</a>
      <p>Name - Nickname - Origin - State - id</p>
      <ul>
        {slaves.map((slave) => (
          <li key={slave.id}>
            {slave.name} - {slave.nickname} - {slave.origin} - {slave.state} - <a href={`/slave/${slave.id}`}>Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlavesList;
