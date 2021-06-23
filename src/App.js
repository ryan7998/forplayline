import React, {useState, useEffect} from 'react';
import {headShotObj, assets} from './utils/mapper';
import Footer from './components/Footer';
import Bottom from './components/Bottom';
import ButtonList from './components/ButtonList';
import PlayerList from './components/PlayersList';
import Top from './components/Top';

function App() {
  
  const [playersInfo, setPlayersInfo] = useState();

  const fetchPlayers = async() =>{
    // use https://cors-anywhere.herokuapp.com/ to resolve cors issue from localhost:
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json');
    // const response = await fetch('https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json');
    const {players} = await response.json();
    setPlayersInfo(players);
  }
  useEffect(()=>{fetchPlayers()}, [])
  return (
    <>
      <header>
        <img src={assets.logo} alt="logo" />
      </header>
      <main>
        <Top pBar = {assets.progressbar} />
        <PlayerList playersInfo={playersInfo} headShotObj={headShotObj} />
        <ButtonList notifyBtn = {assets.notifyBtn} depositBtn = {assets.depositBtn}/>
        <Bottom iosBtn ={assets.iosBtn} gpBtn = {assets.googleBtn}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
