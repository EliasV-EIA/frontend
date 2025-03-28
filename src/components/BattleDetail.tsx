import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BattleDetail = () => {
  const { id } = useParams();
  const [battle, setbattle] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/battles/${id}`)
        .then((response) => {
          setbattle(response.data);
        })
        .catch((error) => {
          console.error('Error fetching battle details', error);
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
      <p>contestant 1: {battle.contestant_1}</p>
      <p>contestant 2: {battle.contestant_2}</p>
      <p>Winner: {battle.winner}</p>
      <p>Death?: {battle.death_occured}</p>
      <p>Injuries: {battle.injuries}</p>
      <p>Date {battle.date}</p>
      <a href={`./${battle.id}/edit`}>Edit</a>
    </div>
  );
};

export default BattleDetail;
