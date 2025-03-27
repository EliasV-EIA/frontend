import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DictatorsList = () => {
  const [dictators, setDictators] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/dictators') // Ensure this points to your backend endpoint
      .then((response) => {
        setDictators(response.data);
      })
      .catch((error) => {
        console.error('Error fetching dictators', error);
      });
  }, []);

  return (
    <div>
      <a href='/'>Return to home page</a>
      <h2>All dictators</h2>
      <p>Name - Territory - Number of Slaves - Loyalty</p>
      <ul>
        {dictators.map((dictator) => (
          <li key={dictator.id}>
            {dictator.name} - {dictator.territory} - {dictator.number_of_slaves} - {dictator.loyalty}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default DictatorsList;
