import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import SplashScreenMask from 'react-native-splash-screen-mask';

import IMAGE from '../assets/ball.png';

export default class Splash extends Component {
    render() {
        return (
            <SplashScreenMask
                imageSource={IMAGE}
                navigationAction={() =>
                    Actions.homeScene()}
                backgroundStyle={styles.background}
                duration={3000}
            />
        )
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#ff0000'
    }
})