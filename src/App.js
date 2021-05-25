import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar/Sidebar'

import { Container, PageBody, Header, Footer, MainContainer } from './AppStyled';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import Users from './pages/Users';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <MainContainer>
                
                <Header>
                <Sidebar />
                    React - Desafio 01
                </Header>
            </MainContainer>
            <Container>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                    </Switch>
                </PageBody>

                <Footer>
                    React - Desafio 01
                    </Footer>
            </Container>
        </BrowserRouter>
    );
}