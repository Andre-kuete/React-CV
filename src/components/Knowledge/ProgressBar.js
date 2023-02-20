import React from 'react';

const progressBar = (props) => {
    console.log(props);
    return (
        <div className="props.className">
            <h3>{props.title}</h3>
            <div className="years">
                <span>Années d'experience</span>
                <span>1 an</span>
                <span>2 an</span>
            </div>
            <div>
                {
                props.languages.map((item)=>{//map:appel chaque elt individuellement
                    let xpYears=2;
                    let progressBar= item.xp/xpYears*100+'%';


                    return(
                        <div key={item.id} className="languagesList">
                              <li>{item.value}</li>
                              <div className="progressBar" style={
                                {width:progressBar} }></div>
                             


                            </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default progressBar;