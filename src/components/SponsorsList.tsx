import  { useEffect, useState } from 'react';
import axios from 'axios';

const SponsorsList = () => {
  const [sponsors, setSponsors] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('https://backend-drf6.onrender.com/sponsors') // Ensure this points to your backend endpoint
      .then((response) => {
        setSponsors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching sponsors', error);
      });
  }, []);

  return (
    <div>
      <a href='/'>Return to home page</a>
      <h2>All Sponsors</h2>
       <a href='/add-sponsor'>Add sponsor</a>
      <p>Company Name - Donated items </p>
      <ul>
        {sponsors.map((sponsor) => (
          <li key={sponsor.id}>
            {sponsor.company_name} - {sponsor.donated_items} - Open details for preferred fighter - <a href={`/sponsor/${sponsor.id}`}>Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SponsorsList;
