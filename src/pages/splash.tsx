import React from 'react';
import styled from 'styled-components/native';
import PrimaryButton from '../components/primaryButton';
import SecondaryButton from '../components/secondaryButton';
import Background from '../components/background';
import { useNavigation } from '@react-navigation/native';
import { AppStackScreenProp } from '../navigation/stackNavigation';
import Logo from '../../assets/Logo.svg';

const Splash = () => {
    const navigation = useNavigation<AppStackScreenProp>();

    return (
        <Background>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <Container>
                <ButtonsContainer>
                    <PrimaryButton
                        text="Login"
                        onPress={() => navigation.navigate('Login')}
                    />
                    <SecondaryButton
                        text="Register"
                        onPress={() => navigation.navigate('SignUp')}
                    />
                </ButtonsContainer>
            </Container>
        </Background>
    );
};

const LogoContainer = styled.View`
    position: absolute;
    top: 215px;
    align-self: center;
`;

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
