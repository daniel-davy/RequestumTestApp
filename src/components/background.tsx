import React from 'react';
import { BackgroundImage } from '../styledComponents/backgroundImage';

const Background = ({children}: IBackgroundProps) => {
    return (
        <BackgroundImage source={require('../../assets/bg.png')}>
            {children}
        </BackgroundImage>
    );
};

interface IBackgroundProps {
    children: React.JSX.Element | React.JSX.Element[];
}

export default Background;
