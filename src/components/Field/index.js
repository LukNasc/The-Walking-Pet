import React from 'react';
import { Container, Input } from './styles';

const Field = ({ placeholder, value, onChangeText, marginTop }) => (
    <Container>
        <Input
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            marginTop={marginTop}
        />
    </Container>);

export default Field;
