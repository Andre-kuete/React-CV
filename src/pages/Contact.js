import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const contact = () => {
    return (
        <div className="contact">
            <Navigation/>
           <div className="contactContent">
              <div className="header"></div>
              <div className="contactBox">
                <h1>Contactez-moi</h1>
                 <ul>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Limoges</span>
                    </li>
                    <li>
                        <i className="fas fa-mobile-alt"></i>
                        <CopyToClipboard text="0652391387">
                            <span className="clickInput" onClick={()=>
                            {alert('Télephone copie !');}}>06 52 39 13 87 </span>
                        </CopyToClipboard>
                    </li>
                    <li>
                        <i className="far fa-envelope"></i>
                        <CopyToClipboard text="verges504@yahoo.com">
                            <span className="clickInput" onClick={()=>
                            {alert(' E-mail copie !');}}>verges504@yahoo.com </span>
                        </CopyToClipboard>
                    </li>
                 </ul>
              </div>
              <div className="socialNetwork">
                <ul>
                   <a href="https://www.linkedin.com/in/andre-serges-kuete-teyoudio-19a94a256/" target="_blank" 
                        rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Andre-kuete" target="_blank" 
                        rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                </ul>
              </div>
           </div>
        </div>
    );
};

export default contact;