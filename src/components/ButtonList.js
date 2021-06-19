import React from 'react';

const ButtonList = ({notifyBtn, depositBtn}) =>{
    return(
        <section className="button-list">
        <button>
          <img src={notifyBtn} alt="notify button" />
          <h4>NOTIFY ME</h4>
        </button>
        <button>
          <img src={depositBtn} alt="deposit button" />
          <h4>DEPOSIT</h4>
        </button>
      </section>
    )
}
export default ButtonList;