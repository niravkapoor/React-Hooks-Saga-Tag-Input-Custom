import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppStyle, { GlobalStyle } from './App.style';
import Home from '../Home';
import React from 'react';
import theme from '../../../styles/theme';

export default function App(props) {
    return (
        <ThemeProvider theme={theme}>
            <AppStyle>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={ Home }></Route>
                    </Switch>
                </BrowserRouter>
                <GlobalStyle />
            </AppStyle>
        </ThemeProvider>
    )
}