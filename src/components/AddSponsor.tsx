import React, { useState } from 'react';
import axios from 'axios';

const AddSponsor = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    donated_items: '',
    preffered_fighter: '',

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
      .post('http://localhost:3000/sponsors', formData) // Make sure to adjust URL
      .then((response) => {
        alert('Sponsor added successfully!');
        setFormData({
          company_name: '',
          donated_items: '',
          preffered_fighter: '',
        });
      })
      .catch((error) => {
        console.error('There was an error adding the sponsor!', error);
      });
  };

  return (
    <div>
      <h2>Add a New Sponsor</h2>
      <a href='/'>Return to home page</a>
      <h3>Company Name - Donated Items - Preffered fighter id</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          placeholder="Company Name"
        />
        <input
          type="text"
          name="donated_items"
          value={formData.donated_items}
          onChange={handleChange}
          placeholder="Donated Items"
        />
        <input
          type="text"
          name="preffered_fighter"
          value={formData.preffered_fighter}
          onChange={handleChange}
          placeholder="Preferred Fighter"
        />
        <button type="submit">Add Sponsor </button>
      </form>
    </div>
  );
};

export default AddSponsor;
