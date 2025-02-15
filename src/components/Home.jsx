import { useState } from "react";
import { sculptureList } from "../data";
import '../index.css'


const Home = () => {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  let sculpture = sculptureList[index] || sculptureList[0];
 

  return (
    <div>

<div className="align-center">
        <center>
          <h2>
            <i>{sculpture.name} </i>
            by {sculpture.artist}
          </h2>
          <h3>
            ({index + 1} of {sculptureList.length})
          </h3>
        </center>  <br /> <br />
        <center>
          <button onClick={handleClick} className="spacing">Next</button>
        </center>  <br /> <br />

        <center>
          <img src={sculpture.url} alt={sculpture.alt} />
        </center>
        <div className="box">
          <p>
            {sculpture.description}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Home;