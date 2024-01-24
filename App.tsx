import React from 'react';
import styled from 'styled-components/native';

const App = () => {
    return (
        <StyledView>
            <StyledText>123</StyledText>
        </StyledView>
    );
};

const StyledView = styled.View`
    flex: 1;
`;

const StyledText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #000000
`;

export default App;
