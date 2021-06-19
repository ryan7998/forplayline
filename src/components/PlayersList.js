import React, {useState} from 'react';
import Modal from './Modal';

const PlayerList = ({headShotObj, playersInfo}) =>{
    const [currentPhoto, setCurrentPhoto] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = (image, name, points, i) =>{
      setCurrentPhoto({image, name, points, index:i})
      setIsModalOpen(!isModalOpen);
    }
    return(
        <section className="players-list">
          {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal}/>}
            {playersInfo && headShotObj &&
                playersInfo.map((player, i)=>(
                    <div 
                        className="player-item" 
                        key = {`${player.last_name}-${player.points}`}
                        onClick={()=>toggleModal(headShotObj[player.last_name.toLowerCase()], player.last_name, player.points, i)}
                    >
                        <div className="image-container">
                            <img 
                                src={headShotObj[player.last_name.toLowerCase()]} 
                                alt= {PlayerList.last_name}
                                
                            />
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