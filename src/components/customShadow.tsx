import React from 'react';
import DropShadow from 'react-native-drop-shadow';

const CustomShadow = ({ children }: ICustomShadowProps) => {
    return (
        <DropShadow
            style={{
                shadowColor: '#EB005780',
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.5,
                shadowRadius: 15,
            }}>
            {children}
        </DropShadow>
    );
};

interface ICustomShadowProps {
    children: React.JSX.Element;
}

export default CustomShadow;
