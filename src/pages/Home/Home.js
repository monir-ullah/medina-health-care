import React from 'react';
import Services from '../Services/Services';
import ExtraInfo from './ExtraInfo/ExtraInfo';
import MainHeading from './MainHeading/MainHeading';

const Home = () => {
    return (
        <div>
            
            <MainHeading></MainHeading>
            <ExtraInfo></ExtraInfo>
            <Services></Services>
            
        </div>
    );
};

export default Home;