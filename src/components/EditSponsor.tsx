import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditSponsor = () => {
  const {id} = useParams()
  
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
      .patch(`https://backend-drf6.onrender.com/sponsors/${id}`, formData) // Make sure to adjust URL
      .then(() => {
        alert('Sponsor edited successfully!');
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
      <h2>Edit a Sponsor</h2>
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

        <button type="submit">Edit Sponsor</button>
      </form>
    </div>
  );
};

export default EditSponsor;
