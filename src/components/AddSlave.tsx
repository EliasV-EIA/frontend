import React, { useState } from 'react';
import axios from 'axios';

const AddSlave = () => {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    origin: '',
    strength: 0,
    agility: 0,
    wins: 0,
    losses: 0,
    state: 'alive',
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
      .post('https://backend-drf6.onrender.com/slaves', formData) // Make sure to adjust URL
      .then(() => {
        alert('Slave added successfully!');
        setFormData({
          name: '',
          nickname: '',
          origin: '',
          strength: 0,
          agility: 0,
          wins: 0,
          losses: 0,
          state: 'alive',
        });
      })
      .catch((error) => {
        console.error('There was an error adding the slave!', error);
      });
  };

  return (
    <div>
      <h2>Add a New Slave</h2>
      <a href='/'>Return to home page</a>
      <h3>Name - Nickname - Origin - Strength - Agility - Wins - Losses - State </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="Nickname"
        />
        <input
          type="text"
          name="origin"
          value={formData.origin}
          onChange={handleChange}
          placeholder="Origin"
        />
        <input
          type="number"
          name="strength"
          value={formData.strength}
          onChange={handleChange}
          placeholder="Strength"
        />
        <input
          type="number"
          name="agility"
          value={formData.agility}
          onChange={handleChange}
          placeholder="Agility"
        />
        <input
          type="number"
          name="wins"
          value={formData.wins}
          onChange={handleChange}
          placeholder="Wins"
        />
        <input
          type="number"
          name="losses"
          value={formData.losses}
          onChange={handleChange}
          placeholder="Losses"
        />
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
        >
          <option value="ALIVE">Alive</option>
          <option value="DEAD">Dead</option>
          <option value="FREE">Free</option>
          <option value="ESCAPED">Escaped</option>
        </select>
        <button type="submit">Add Slave</button>
      </form>
    </div>
  );
};

export default AddSlave;
