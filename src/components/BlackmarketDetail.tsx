import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlackmarketDetail = () => {
  const { id } = useParams();
  const  [blackmarket, setblackmarket] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://backend-drf6.onrender.com/blackmarket/${id}`)
        .then((response) => {
          setblackmarket(response.data);
        })
        .catch((error) => {
          console.error('Error fetching blackmarket details', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Buyer:  <a href={`slave/${blackmarket.buyer_id}`}>{blackmarket.buyer_id}</a></p>
      <p>Seller:  <a href={`dictator/${blackmarket.seller_id}`}>{blackmarket.seller_id}</a></p>
      <p>Item:  {blackmarket.item}</p>
      <p>Amount paid:  {blackmarket.amount}</p>
      <p>Status:  {blackmarket.status}</p>
      <a href={`./${blackmarket.id}/edit`}>Edit</a>
    </div>
  );
};

export default BlackmarketDetail;
