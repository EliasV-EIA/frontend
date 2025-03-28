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
        .get(`https://backend-drf6.onrender.com/battles/${id}`)
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
      <p>contestant 1: <a href={`/slave/${battle.contestant_1}`}>{battle.contestant_1}</a></p>
      <p>contestant 2: <a href={`/slave/${battle.contestant_2}`}>{battle.contestant_2}</a></p>
      <p>Winner: <a href={`/slave/${battle.winner}`}>{battle.winner}</a></p>
      <p>Death?: {battle.death_occured}</p>
      <p>Injuries: {battle.injuries}</p>
      <p>Date {battle.date}</p>
      <a href={`./${battle.id}/edit`}>Edit</a>
    </div>
  );
};

export default BattleDetail;
