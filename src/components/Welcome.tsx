const Welcome =() => {
 
    return(

      <div>
        <h1>Welcome. Select desired section</h1>
        <ul>
          <li>
          <a href="/slaves">Full list of slaves</a>
          </li>

          <li>
          <a href="/dictators">Full list of dictators</a>
          </li>
          <li>
            <a href="/sponsors">Full list of sponsors</a>
          </li>
          <li>
            <a href="/battles">Full list of battles</a>
          </li>
          
        </ul>
        </div>

    );
}
export default Welcome;