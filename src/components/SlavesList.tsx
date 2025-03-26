import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SlavesList = () => {
  const [slaves, setSlaves] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/slaves') // Ensure this points to your backend endpoint
      .then((response) => {
        setSlaves(response.data);
      })
      .catch((error) => {
        console.error('Error fetching slaves', error);
      });
  }, []);

  return (
    <div>
      <h2>All Slaves</h2>
      <p>Name - Nickname - Origin</p>
      <ul>
        {slaves.map((slave) => (
          <li key={slave.id}>
            {slave.name} - {slave.nickname} - {slave.origin} - {slave.state}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlavesList;
