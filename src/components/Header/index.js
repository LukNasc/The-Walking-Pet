import React from 'react';

import { Container, Image } from './styles';

import header from '../../assets/Header.png'
const Header = () => (
    <Container>
        <Image source={header} resizeMode='contain'/>
    </Container>
);

export default Header;
