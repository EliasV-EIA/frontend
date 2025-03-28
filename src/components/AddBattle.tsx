import React, { useState } from 'react';
import axios from 'axios';

const AddBattle = () => {
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
    const parsedValue = (name === 'strength' || name === 'agility' || name === 'wins' || name === 'losses')
      ? Number(value) // Convert to number
      : value; // Keep other fields as strings

    setFormData({ ...formData, [name]: parsedValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post('http://https://partial-backend.onrender.com/battles', formData) // Make sure to adjust URL
      .then(() => {
        alert('Battle added successfully!');
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
      <h2>Add a Battle</h2>
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
        <button type='submit'>Add battle</button>
      </form>
    </div>
  );

};

export default AddBattle;
