import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import theme from '../config/theme';

const CustomShadow = ({ children }: ICustomShadowProps) => {
    return (
        <DropShadow
            style={{
                shadowColor: theme.colors.primary,
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
