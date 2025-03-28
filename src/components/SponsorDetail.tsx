import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SponsorDetail = () => {
  const { id } = useParams();
  const [sponsor, setSponsor] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/sponsors/${id}`)
        .then((response) => {
          setSponsor(response.data);
        })
        .catch((error) => {
          console.error('Error fetching sponsor details', error);
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
      <h1>{sponsor.company_name}</h1>
      <p>Donated items: {sponsor.donated_items}</p>
      <p>Preferred fighter: <a href={`/slave/${sponsor.preffered_fighter}`}>{sponsor.preffered_fighter}</a></p>
      <a href={`./${sponsor.id}/edit`}>Edit</a>
    </div>
  );
};

export default SponsorDetail;
