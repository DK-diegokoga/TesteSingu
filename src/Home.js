import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, StatusBar, Alert } from 'react-native';


export default function Home() {
    /*var validando = true;*/
    var sequencePlayer = "";
    var maxJogadas = 5;
    var sequenceGame = "";

    function random() {
        sequenceGame += Math.round(Math.random() * (4) + 1).toString();

        switch (sequenceGame) {
            case '1':
                Alert.alert('red')
                break;
            case '2':
                Alert.alert('yellow')
                break;
            case '3':
                Alert.alert('blue')
                break;
            case '4':
                Alert.alert('green')
                break;
        }
    }

    var i = 1;
    function start() {
        if (i <= maxJogadas) {
            /*for (var i = 0; validando == true; i++)*/
            random()
            i++

        } else {
            Alert.alert('You Lose!')
            validando = false
        }
        /*compare()*/
    }

    /*function gameOver() {
    
    }*/

    /*function compare() {
      for (var i = 0; i < sequencePlayer.length; i++) {
        if (sequencePlayer[i] !== sequenceGame[i]) {
          gameOver();
        }
        if (sequenceGame === sequencePlayer) {
          start();
        }
      }
    }*/


    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={styles.tela}>

                <TouchableOpacity
                    style={styles.redButton}
                    onPress={() => {
                        redButton()
                        function redButton() {
                            sequencePlayer += "1";
                        }
                    }}
                >

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.startButton}
                    onPress={() => {
                        start()
                    }}
                >
                    <Text style={styles.Texto}>PLAY</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.yellowButton}
                    onPress={() => {
                        yellowButton()
                        function yellowButton() {
                            sequencePlayer += "2";
                        }
                    }}

                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.blueButton}
                    onPress={() => {
                        blueButton()
                        function blueButton() {
                            sequencePlayer += "3";
                        }
                    }}
                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.greenButton}
                    onPress={() => {
                        greenButton()
                        function greenButton() {
                            sequencePlayer += "4";
                        }
                    }}
                >
                </TouchableOpacity>
            </View>
        </>
    );
    }

    const styles = StyleSheet.create({
        tela: {
            flex: 1,
            backgroundColor: '#5A9BD4',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 100
        },
        Texto: {
            color: '#FFFFFF',
            fontSize: 25,
            paddingTop: 29,
            paddingLeft: 18
        },
        redButton: {
            width: 100,
            height: 100,
            borderRadius: 40,
            borderWidth: 2,
            backgroundColor: '#CC1100',
            top: 20,
            marginBottom: 20
        },
        startButton: {
            width: 100,
            height: 100,
            borderRadius: 40,
            backgroundColor: '#000000',
            top: 20,
        },
        yellowButton: {
            width: 100,
            height: 100,
            borderRadius: 40,
            borderWidth: 2,
            backgroundColor: '#FFFF00',
            right: 120,
            bottom: 80,
        },
        blueButton: {
            width: 100,
            height: 100,
            borderRadius: 40,
            borderWidth: 2,
            backgroundColor: '#0047ab',
            left: 120,
            bottom: 180,
        },
        greenButton: {
            width: 100,
            height: 100,
            borderRadius: 40,
            borderWidth: 2,
            backgroundColor: '#90EE90',
            bottom: 160,
        },
    });