import React from 'react';
import styled from 'styled-components/native';
import Background from '../components/background';
import BackButton from '../components/backButton';
import { useNavigation } from '@react-navigation/native';
import { AppStackScreenProp } from '../navigation/stackNavigation';

const Login = () => {
    const navigation = useNavigation<AppStackScreenProp>();

    return (
        <Background>
            <BackButton onGoBack={() => navigation.goBack()}/>
            <Container>

            </Container>
        </Background>
    );
};

const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding: 35px;
`;

export default Login;
