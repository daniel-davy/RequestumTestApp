import React from 'react';
import { ButtonText, SecondaryButtonContainer } from '../styledComponents/buttons';

const SecondaryButton = ({ text, onPress }: ISecondaryButtonProps) => {
    return (
        <SecondaryButtonContainer onPress={onPress}>
            <ButtonText>{text}</ButtonText>
        </SecondaryButtonContainer>
    );
};

interface ISecondaryButtonProps {
    text: string;
    onPress: () => void;
}

export default SecondaryButton;
