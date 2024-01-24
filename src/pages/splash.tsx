import React from 'react';
import styled from 'styled-components/native';
import PrimaryButton from '../components/primaryButton';
import SecondaryButton from '../components/secondaryButton';

const Splash = () => {
    return (
        <Container>
            <ButtonsContainer>
                <PrimaryButton text='Login' onPress={() => console.log(1)} />
                <SecondaryButton text='Register' onPress={() => console.log(2)} />
            </ButtonsContainer>
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding: 35px;
`;

const ButtonsContainer = styled.View`
    position: absolute;
    bottom: 75px;
    width: 100%;
    gap: 15px;
`;

export default Splash;
