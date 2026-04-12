import styled from "styled-components/native";

export const RegisterContainer = styled.View`
    flex-direction: row;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: space-between;
    align-items: center;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
    flex-direction: row;
    width: 47%;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.checked ? '#FFF': '#e7e7e7'};
    height: 45px;
    border-radius: 4px;
    border-color: ${props => props.checked ? '#3b3dbf': 'transparent'};
    border-width: 1.5px;
    margin-bottom: 14px;
`;

export const RegisterLabel = styled.Text`
    margin-left: 8px;
    font-size: 17px;
`;