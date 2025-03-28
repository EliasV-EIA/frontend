import  { useEffect, useState } from 'react';
import axios from 'axios';

const BlackmarketsList = () => {
  const [blackmarkets, setblackmarkets] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('https://partial-backend.onrender.com/blackmarket') // Ensure this points to your backend endpoint
      .then((response) => {
        setblackmarkets(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blackmarkets', error);
      });
  }, []);

  return (
    <div>
      <a href='/'>Return to home page</a>
      <h2>All black markets transactions</h2>
       <a href='/add-blackmarket'>Add black market transaction</a>
      <p>Buyer - Seller - item - Amount paid - Status</p>
      <ul>
        {blackmarkets.map((blackmarket) => (
          <li key={blackmarket.id}>
            <a href={`slave/${blackmarket.buyer_id}`}>{blackmarket.buyer_id}</a> - <a href={`dictator/${blackmarket.seller_id}`}>{blackmarket.seller_id}</a> - {blackmarket.item} - {blackmarket.amount} - {blackmarket.status} - <a href={`/blackmarket/${blackmarket.id}`}>Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlackmarketsList;
