import React from 'react';

const Bottom = ({iosBtn, gpBtn}) =>{
    return(
        <section className="bottom">
        <div className="border" />
        <p><b>DOWNLOAD THE APP</b></p>
        <div className="download-btn">
          <a href=""><img src={iosBtn} /></a>
          <a href=""><img src={gpBtn} /></a>
        </div>
      </section>
    )
}

export default Bottom;