import React from 'react';
import { ButtonText, PrimaryButtonContainer } from '../styledComponents/buttons';
import CustomShadow from './customShadow';

const PrimaryButton = ({
    text,
    onPress,
    shakeAnimation,
}: IPrimaryButtonProps) => {
    return (
        <CustomShadow>
            <PrimaryButtonContainer onPress={onPress}>
                <ButtonText>{text}</ButtonText>
            </PrimaryButtonContainer>
        </CustomShadow>
    );
};

interface IPrimaryButtonProps {
    text: string;
    onPress: () => void;
    shakeAnimation?: boolean;
}

export default PrimaryButton;
