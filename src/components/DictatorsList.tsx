import  { useEffect, useState } from 'react';
import axios from 'axios';

const DictatorsList = () => {
  const [dictators, setDictators] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('https://partial-backend.onrender.com/dictators') // Ensure this points to your backend endpoint
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
      <a href='/add-dictator'>Add Dictator</a>
      <p>Name - Territory - Number of Slaves - Loyalty</p>
      <ul>
        {dictators.map((dictator) => (
          <li key={dictator.id}>
            {dictator.name} - {dictator.territory} - {dictator.number_of_slaves} - {dictator.loyalty} - <a href={`dictator/${dictator.id}`}>Details</a>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default DictatorsList;
