import React from 'react';
import Navigation from '../components/Navigation';
import Experience from '../components/Knowledge/Experience';
import Hobbies from '../components/Knowledge/Hobbies';
import Languages from '../components/Knowledge/Languages';
import OtherSkils from '../components/Knowledge/OtherSkills';


const Knowledge = () => {
    return (
        <div   className="knowledges">
            <Navigation/>
            <div className="knowledgesContent">
                <Languages/>
                <Experience/>
                <OtherSkils/>
                <Hobbies/>
               
            </div>
        </div>
    );
};

export default Knowledge;