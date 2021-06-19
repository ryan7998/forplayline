import React, {useState, useEffect} from 'react';
import {headShotObj, assets} from './utils/headshot-mapper';

function App() {
  
  const [playersInfo, setPlayersInfo] = useState();

  const fetchPlayers = async() =>{
    // use https://cors-anywhere.herokuapp.com/ to resolve cors issue from localhost:
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json');
    const {players} = await response.json();
    setPlayersInfo(players);

    // players.map(player=>{
    //   let imgSrc = player.last_name.toLowerCase();
    //   // console.log((headShotObj[imgSrc]));
    //   // player.img= headShotObj[imgSrc];
    // })
    // console.log(players);
    // return players;
  }
  useEffect(()=>{fetchPlayers()}, [])
  return (
    <>
      <header>
        <img src={assets.logo} alt="logo" />
      </header>
      <main>
        <img className="progress-bar" src={assets.progressbar} />
        <section className="top">
          <h1>YOUR PLAYLINE IS SET!</h1>
          <h2>COME BACK @ 7:30PM TO TRACK IT LIVE!</h2>
          <div className="border" />
          <p>Pro Tip: You can manage your PlayLine's until they go live in the Upcoming area</p>
        </section>
        <section className="players-list">
          {playersInfo && headShotObj &&
            playersInfo.map(player=>(
              <div key = {`${player.last_name}-${player.points}`}>
                {player.last_name.toLowerCase()} {player.points} 
                {/* <img src={headShotObj.[player.last_name.toLowerCase()]}></img> */}
              </div>
            ))
          }
        </section>
        <section className="bottom">

        </section>
      </main>
      <footer>

      </footer>
      
    </>
  );
}

export default App;
