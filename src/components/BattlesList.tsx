import  { useEffect, useState } from 'react';
import axios from 'axios';

const BattlesList = () => {
  const [Battles, setBattles] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('https://backend-drf6.onrender.com/battles') // Ensure this points to your backend endpoint
      .then((response) => {
        setBattles(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Battles', error);
      });
  }, []);

  return (
    <div>
      <a href='/'>Return to home page</a>
      <h2>All Battles</h2>
       <a href='/add-battle'>Add Battle</a>
      <p>Contestant 1 - Contestant 2 - Winner - Death? - Injuries</p>
      <ul>
        {Battles.map((battle) => (
          <li key={battle.id}>
            <a href={`/slave/${battle.contestant_1}`}>{battle.contestant_1}</a> - <a href={`/slave/${battle.contestant_2}`}>{battle.contestant_2}</a> - <a href={`/slave/${battle.winner}`}>{battle.winner}</a> - {battle.death_occured} - {battle.injuries} - <a href={`/battle/${battle.id}`}>Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BattlesList;
