import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import { widthPercentageToDP as wd, heightPercentageToDP as hg } from 'react-native-responsive-screen'
export const Container = styled.View`
  
`;


const StyledInput = styled.TextInput.attrs({
    placeholderTextColor: '#000'
})`
    width: ${wd(82.12)};
    height: ${hg(5.35)};
    padding:5px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 5px;
    font-size: ${wd(2.89)};
    font-family: 'Montserrat';
    font-weight:bold;
    margin-top: ${props => hg(props.marginTop)};
`;

export const Input = props => <StyledInput {...props} />;

Input.propTypes = {
    marginTop: PropTypes.number
}

Input.defaultProps = {
    marginTop: 0
}