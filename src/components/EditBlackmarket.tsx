import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditBlackmarket = () => {
  const {id} = useParams()
  
  const [formData, setFormData] = useState({
    buyer_id: '',
    seller_id: '',
    item: '',
    amount: 0,
    status: 'COMPLETED',
  });

  // Updated handleChange to support both input and select elements
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Convert 'strength', 'agility', 'wins', 'losses' to numbers if necessary
    const parsedValue = (name === 'amount')
      ? Number(value) // Convert to number
      : value; // Keep other fields as strings


    setFormData({ ...formData, [name]: parsedValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .patch(`https://partial-backend.onrender.com/blackmarket/${id}`, formData) // Make sure to adjust URL
      .then(() => {
        alert('Blackmarket edited successfully!');
        setFormData({
          buyer_id: '',
          seller_id: '',
          item: '',
          amount: 0,
          status: 'COMPLETED',
        });
      })
      .catch((error) => {
        console.error('There was an error adding the Blackmarket!', error);
      });
  };

  return (
    <div>
      <h2>Edit a Blackmarket</h2>
      <a href='/'>Return to home page</a>
      <h3>Buyer id - Seller id - item - Amount paid - Status</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="buyer_id"
          value={formData.buyer_id}
          onChange={handleChange}
          placeholder="Buyer (Slave)"
        />
        <input
          type="text"
          name="seller_id"
          value={formData.seller_id}
          onChange={handleChange}
          placeholder="Seller (Dictator)"
        />
        <input
          type="text"
          name="item"
          value={formData.item}
          onChange={handleChange}
          placeholder="Item"
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <select
          name="state"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="COMPLETED">Completed</option>
          <option value="FAILED">Failed</option>
          <option value="DISCOVERED">Discovered</option>
        </select>
        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
};

export default EditBlackmarket;
