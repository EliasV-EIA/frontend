import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SlaveDetail = () => {
  const { id } = useParams();
  const [slave, setSlave] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://partial-backend.onrender.com/slaves/${id}`)
        .then((response) => {
          setSlave(response.data);
        })
        .catch((error) => {
          console.error('Error fetching slave details', error);
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
      <h1>{slave.name}</h1>
      <p>Nickname: {slave.nickname}</p>
      <p>Origin: {slave.origin}</p>
      <p>Strength: {slave.strength}</p>
      <p>Agility: {slave.agility}</p>
      <p>Wins: {slave.wins}</p>
      <p>Losses: {slave.losses}</p>
      <p>State: {slave.state}</p>
      <a href={`./${slave.id}/edit`}>Edit</a>
    </div>
  );
};

export default SlaveDetail;
