import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditBattle = () => {
  const {id} = useParams()
  
  const [formData, setFormData] = useState({
    contestant_1: '',
    contestant_2: '',
    winner: '',
    death_occured: 'false',
    injuries: '',
  });

  // Updated handleChange to support both input and select elements
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
 
    // Convert 'strength', 'agility', 'wins', 'losses' to numbers if necessary
    const parsedValue = (name === 'death_occured' )
      ? Boolean(value) // Convert to bool
      : value; // Keep other fields as strings

    setFormData({ ...formData, [name]: parsedValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3000/Battles/${id}`, formData) // Make sure to adjust URL
      .then((response) => {
        alert('Battle edited successfully!');
        setFormData({
          contestant_1: '',
          contestant_2: '',
          winner: '',
          death_occured: 'false',
          injuries: '',
        });
      })
      .catch((error) => {
        console.error('There was an error adding the Battle!', error);
      });
  };

  return (
    <div>
      <h2>Edit a Battle</h2>
      <a href='/'>Return to home page</a>
      <h3>Contestant 1 - Contestant 2 - Winner - Death occured? - Injuries</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="contestant_1"
          value={formData.contestant_1}
          onChange={handleChange}
          placeholder="Contestant 1"
        />
        <input
          type="text"
          name="contestant_2"
          value={formData.contestant_2}
          onChange={handleChange}
          placeholder="Contestant 2"
        />
        <input
          type="text"
          name="winner"
          value={formData.winner}
          onChange={handleChange}
          placeholder="Winner"
        />
        <select
          name="death_occured"
          value={formData.death_occured}
          onChange={handleChange}
        >
          <option value={'true'}>True</option>
          <option value={'false'}>False</option>

        </select>
        <input
          type="text"
          name="injuries"
          value={formData.injuries}
          onChange={handleChange}
          placeholder="Injuries"
        />
        <button type='submit'>Edit battle</button>
      
      </form>
    </div>
  );
};

export default EditBattle;
