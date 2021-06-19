import React from 'react';

const Top = ({pBar}) =>{
    return(
        <>
            <img className="progress-bar" src={pBar} />
            <section className="top">
            <h1>YOUR PLAYLINE IS SET!</h1>
            <h2>COME BACK @ 7:30PM TO TRACK IT LIVE!</h2>
            <div className="border" />
            <p>Pro Tip: You can manage your PlayLine's until they go live in the Upcoming area</p>
            </section>
        </>
    )
}

export default Top;