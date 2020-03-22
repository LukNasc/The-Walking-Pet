import styled from 'styled-components/native';
import { widthPercentageToDP as wd, heightPercentageToDP as hg } from 'react-native-responsive-screen'

export const Container = styled.View`
    flex: 1;
    background: #FFF;
    justify-content: center;
    align-items:center;
`;

export const Form = styled.View`
    flex:2;
    padding-top: ${hg(5.35)};
    align-items:center;
`;

export const Button = styled.TouchableOpacity`
    width: ${wd(82.12)};
    height: ${hg(5.35)};
    border-radius: 5px;
    padding:5px;
    background: #00FF94;
    justify-content:center;
    align-items:center;
    margin-top:${hg(4.91)};
    margin-bottom:5px;
`;

export const TextButton = styled.Text`
    font-size: ${wd(2.89)};
    font-family: 'Montserrat';
    font-weight:bold;
`;