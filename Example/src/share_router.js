import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import ShareExtension from 'react-native-share-extension';
import { Router, Scene } from 'react-native-router-flux';

import Result from './components/share/result';
import Save from './components/share/save';


const iconQuit = require('./images/quit.png'); // eslint-disable-line


class RouterShareComponent extends Component {
    async componentDidMount() {
        try {
            const data = await ShareExtension.data();
            console.log('------ Element of the share Android extension ------');
            console.log('data: ', data);
            this.props.shareData(data);
        } catch (e) {
            console.log('There was an error fetching the element to share : ', e);
        }
    }


    render() {
        return (
            <Router>
                <Scene
                    key='root'
                >
                    <Scene
                        key='main'
                        hideNavBar
                        rightButtonImage={iconQuit}
                        onRight={() => ShareExtension.close()}
                    >
                        <Scene
                            key='save'
                            component={Save}
                            initial
                            navigationBarStyle={styles.navBarRed}
                            title='Save'
                        />
                        <Scene
                            key='result'
                            component={Result}
                            navigationBarStyle={styles.navBarRed}
                            title='Result'
                        />
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    navBarRed: {
        paddingBottom: 20,
        backgroundColor: 'red',
    },
});


export default RouterShareComponent;
