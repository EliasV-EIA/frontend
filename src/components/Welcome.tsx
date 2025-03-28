import { useState } from "react";

const Welcome =() => {
  const [query, setQuery] = useState({
    inpt: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
  
      // Convert 'strength', 'agility', 'wins', 'losses' to numbers if necessary
      const parsedValue = (name === 'strength' || name === 'agility' || name === 'wins' || name === 'losses')
        ? Number(value) // Convert to number
        : value; // Keep other fields as strings
  
      setQuery({ ...query, [name]: parsedValue });
    };
    const Submission = () => {
      const read = document.getElementById("Slave id lookup")
      window.location.href = "http://localhost:5173/slave/";
    };
    return(

      <div>
        <h1>Welcome. Select desired section</h1>
        <ul>
          <li>
          <a href="/slaves">Full list of slaves</a>
          </li>
          {/* <li>
          <p>
          Slave id lookup
          </p>
          <form onSubmit={Submission}>
          <input type="text" id="Slave id lookup" ></input>
          </form>
          </li> */}
          <li>
          <a href="/dictators">Full list of dictators</a>
          </li>
          <li>
            <a href="/sponsors">Full list of sponsors</a>
          </li>
          
        </ul>
        </div>

    );
}
export default Welcome;