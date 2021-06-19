import React from 'react';

function Modal({onClose, currentPhoto}){
    return(
        <div className="modalBackdrop">
            <div className="modalContainer">
                <button onClick={onClose} type="button">
                    X Close
                </button>
                <h1>{currentPhoto.name}</h1>
                <img src={currentPhoto.image} alt="current category" />
                <h1>POINTS: {currentPhoto.points}</h1>
            </div>
        </div>
    )
}
export default Modal;