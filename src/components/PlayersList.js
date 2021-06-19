import React from 'react';

const PlayerList = ({headShotObj, playersInfo}) =>{
    return(
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
    )
}
export default PlayerList;