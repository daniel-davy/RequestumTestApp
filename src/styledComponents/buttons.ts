import styled from 'styled-components/native';

const PrimaryButtonContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.primary};
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const SecondaryButtonContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.buttonSecondary};
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-family: ${(props) => props.theme.fontFamily.button};
  font-size: ${(props) => props.theme.fontSize.button};
  font-weight: ${(props) => props.theme.fontWeight.button};
`;

export { PrimaryButtonContainer, SecondaryButtonContainer, ButtonText };
