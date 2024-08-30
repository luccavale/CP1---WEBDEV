import React from 'react';

const Plan = ({ title, text, plans, button, img, background }) => {

    if(plans){
        return (
            <div>
                <div
                    className="plano-title"
                    style={{ background, borderBottom: title == "Individual" ? "none" : "1px solid #EBE9E9" }}>
                    <h2>{title}</h2>
                </div>
                <div className="plano-container">
                    <div className="plano-info">
                        { title == "Profissional - Times" ? (
                            <>  
                                <p>{text}</p>
                                <select style={{marginBottom: ""}} name="" id="">
                                    {plans.map( (plano, index) => (
                                        <option key={index} className="option" value={plano.text}>
                                            {plano.text} {plano.price}
                                        </option>
                                    ) )}
                                </select>
                                <p>{text}</p>
                                <select name="" id="">
                                    {plans.map( (plano, index) => (
                                        <option key={index} className="option" value={plano.text}>
                                            {plano.text} {plano.price}
                                        </option>
                                    ) )}
                                </select>
                            </>
                        ) : (
                            <>
                            <p>{text}</p>
                            <select name="" id="">
                                {plans.map( (plano, index) => (
                                    <option key={index} className="option" value={plano.text}>
                                        {plano.text} {plano.price}
                                    </option>
                                ) )}
                            </select>
                            </>
                        )}
                        
                    </div>
                    <button
                        style={{ background, border: title == "Individual" ? 'none' : "1px solid #929292" }}
                        className="plano-btn">
                            {button}
                    </button>
                </div>
            </div>
        )
    } else {
        return (
          <div>
              <div
                className="plano-title"
                style={{ background, borderBottom: title == "Individual" ? "none" : "1px solid #EBE9E9" }}>
                  <h2>{title}</h2>
              </div>
              <div className="plano-container">
                <img className="plano-img" src={img} alt="" />
                <button style={{background, border:'1px solid #929292'}} className="plano-btn">{button}</button>
              </div>
          </div>
        );
    }

};

export default Plan;