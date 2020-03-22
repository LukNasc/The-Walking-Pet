import React, { Component } from 'react';
import { Container, Form, Button, TextButton } from './styles';
import Header from '../../components/Header';
import Field from '../../components/Field';

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Form>
                    <Field
                        placeholder="CPF"
                    />
                    <Field
                        placeholder="Senha"
                        marginTop={3.79}
                    />

                    <Button>
                        <TextButton>
                            Entrar
                        </TextButton>
                    </Button>
                    <TextButton>Não tenho uma conta</TextButton>
                </Form>
            </Container>
        );
    }
}
