import React, { useState } from 'react';
import axios from 'axios';

const AddDictator = () => {
  const [formData, setFormData] = useState({
    name: '',
    territory: '',
    number_of_slaves: 0,
    loyalty: 0,

  });

  // Updated handleChange to support both input and select elements
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Convert 'strength', 'agility', 'wins', 'losses' to numbers if necessary
    const parsedValue = (name === 'number_of_slaves' || name === 'loyalty' )
      ? Number(value) // Convert to number
      : value; // Keep other fields as strings

    setFormData({ ...formData, [name]: parsedValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/dictators', formData) // Make sure to adjust URL
      .then((response) => {
        alert('Slave added successfully!');
        setFormData({
          name: '',
          territory: '',
          number_of_slaves: 0,
          loyalty: 0, 
        });
      })
      .catch((error) => {
        console.error('There was an error adding the slave!', error);
      });
  };

  return (
    <div>
      <h2>Add a Dictator</h2>
      <a href='/'>Return to home page</a>
      <h3>Name - Territory - Number Of Slaves - Loyalty</h3>
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
          name="territory"
          value={formData.territory}
          onChange={handleChange}
          placeholder="Territory"
        />
        <input
          type="number"
          name="number_of_slaves"
          value={formData.number_of_slaves}
          onChange={handleChange}
          placeholder="Number of Slaves"
        />
        <input
          type="number"
          name="loyalty"
          value={formData.loyalty}
          onChange={handleChange}
          placeholder="Loyalty"
        />
        
        <button type="submit">Add Dictator</button>
      </form>
    </div>
  );
};

export default AddDictator;
