import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import { connect } from 'react-redux';

import {
    saveData,
} from '../../actions';

import {
    Button,
} from '../common';



class SavePage extends Component {

    onPress() {
        this.props.saveData();
    }


    renderButtons() {
        const {
            buttonContainer,
        } = styles;
        return (
            <View style={buttonContainer}>
                <Button
                    text={'Save'}
                    buttonActive={true}
                    color={'red'}
                    onPress={this.onPress.bind(this)}
                />
            </View>
        );
    }


    render() {
        const {
            container,
            inputContainer,
        } = styles;

        return (
                <View
                    style={container}
                >
                    <View
                        style={inputContainer}
                    >
                        <Text style={text}>
                            Hello {this.props.email}
                        </Text>
                    </View>
                    {this.renderButtons()}
                </View>
            );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    inputContainer: {
        flex: 5,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        },
    buttonContainer: {
        flexDirection: 'column',
        flex: 3,
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        marginHorizontal: 40,
    },
});

const mapStateToProps = ({ share }) => {
    const {
        data,
    } = share;


    return {
        data
    };
};


export default connect(mapStateToProps, {
    saveData
})(SavePage);
