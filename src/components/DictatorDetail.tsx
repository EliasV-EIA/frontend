import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DictatorDetail = () => {
  const { id } = useParams();
  const [dictator, setDictator] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/dictators/${id}`)
        .then((response) => {
          setDictator(response.data);
        })
        .catch((error) => {
          console.error('Error fetching dictator details', error);
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
      <h1>{dictator.name}</h1>
      <p>Territory: {dictator.territory}</p>
      <p>Number of Slaves: {dictator.number_of_slaves}</p>
      <p>Loyalty: {dictator.loyalty}</p>
      <a href={`./${dictator.id}/edit`}>Edit</a>
    </div>
  );
};

export default DictatorDetail;
