import React from 'react';
import styled from 'styled-components/native';
import Back from '../../assets/icons/Back.svg';

const BackButton = ({ onGoBack }: IBackButtonProps) => {
    return (
        <LogoContainer>
            <StyledButton onPress={onGoBack}>
                <Back />
            </StyledButton>
        </LogoContainer>
    );
};

interface IBackButtonProps {
    onGoBack: () => void;
}

const LogoContainer = styled.View`
    position: absolute;
    top: 70px;
    left: 24px;
    align-self: center;
`;

const StyledButton = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export default BackButton;
