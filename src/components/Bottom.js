import React from 'react';

const Bottom = ({iosBtn, gpBtn}) =>{
    return(
        <section className="bottom">
        <div className="border" />
        <p><b>DOWNLOAD THE APP</b></p>
        <div className="download-btn">
          <a href="https://fazleryan.com"><img src={iosBtn} alt = "iso button"/></a>
          <a href="https://fazleryan.com"><img src={gpBtn} alt = "google play button"/></a>
        </div>
      </section>
    )
}

export default Bottom;