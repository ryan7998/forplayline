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
              <div className="player-item" key = {`${player.last_name}-${player.points}`}>
                <div className="image-container">
                  <img src={headShotObj.[player.last_name.toLowerCase()]}></img>
                </div>
                
                <p>{player.last_name.toUpperCase()}</p> 
                <div className="points-container"><p>{player.points}</p></div>
                <p className="pts">PTS</p>
              </div>
            ))
          }
        </section>
        <section className="button-list">
          <button>
            <img src={assets.notifyBtn} />
            <h4>NOTIFY ME</h4>
          </button>
          <button>
            <img src={assets.depositBtn} />
            <h4>DEPOSIT</h4>
          </button>
        </section>
        <section className="bottom">
          <div className="border" />
          <p><b>DOWNLOAD THE APP</b></p>
          <div className="download-btn">
            <a href=""><img src={assets.iosBtn} /></a>
            <a href=""><img src={assets.googleBtn} /></a>
          </div>
        </section>
      </main>
      <footer>
        <a href="">About</a>
        <p> | </p>
        <a href="">PLB Bonus</a>
        <p> | </p>
        <a href="">Contact</a>
        <p> | </p>
        <a href="">Security</a>
        <p> | </p>
        <a href="">
          Responsible Play
        </a>
        <p> | </p>
        <a href="">Privacy</a>
        <p> | </p>
        <a href="">Terms</a>
      </footer>
      
    </>
  );
}

export default App;
