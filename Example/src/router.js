import React from 'react';
import { StyleSheet } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import Login from './components/authentication/signin';
import Home from './components/authentication/home';


const RouterComponent = () => {
    return (
        <Router>
            <Scene
                key='root'
            >
                <Scene
                    key='auth'
                    hideNavBar
                >
                    <Scene
                        key='signin'
                        initial
                    >
                        <Scene
                            key='login'
                            component={Login}
                            title='Sign in'
                        />
                    </Scene>
                </Scene>
                <Scene
                    key='home'
                    component={Home}
                    title='Home'
                />
            </Scene>
        </Router>
    );
};

const styles = StyleSheet.create({
    navBarRed: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'red',
    },
});

export default RouterComponent;
