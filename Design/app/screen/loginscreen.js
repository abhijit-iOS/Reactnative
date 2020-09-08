import React from 'react';
import { screenWidth, screenHeight } from '../theme/size'
import { Image, ImageStyle, StyleSheet, View, Text, ImageBackground, Button, TouchableOpacity } from 'react-native';
import { icons } from '../component/icon/icons/index'


const LoginScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View>
                <Image style={styles.topImage} source={icons['loginTop']}></Image>
                <Image style={styles.icPlusFive} source={icons['icPlusFive']}></Image>
            </View>

            <View style={styles.viewStartedContainer}>
                <Image source={icons['downArrow']}></Image>
                <Text style={styles.getStartedText}> Get started here! </Text>
                <Image source={icons['spiralArrow']}></Image>
            </View>
            <View style={{
                flexDirection: 'row',
                width: screenWidth,
                height: screenHeight * 0.253
            }}>
                <View style={styles.viewLearnContainer}>
                    <Image style={styles.learnBg} source={icons['learnBg']}></Image>
                    <Image style={styles.icPlusThree} source={icons['icPlusThree']}></Image>
                    <View style={styles.viewLearnTextContainer}>
                        <Text style={styles.learnText}>LEARN</Text>
                        <Text style={styles.subTextStyle}>(for students)</Text>
                    </View>
                </View>
                <View style={styles.viewTechContainer}>
                    <Image style={styles.teachBg} source={icons['teachBg']}></Image>
                    <Image style={styles.yellowCircle} source={icons['icCircleThree']}></Image>
                    <Image style={styles.icPlusFourBot} source={icons['icPlusFour']}></Image>
                    <Image style={styles.icPlusFourTop} source={icons['icPlusFour']}></Image>
                    <View style={styles.viewTechTextContainer}>
                        <Text style={styles.learnText}>TEACH</Text>
                        <Text style={styles.subTextStyle}>(for teachers)</Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewAlreadyAccContainer}>
                <Text style={styles.alreadyAccText}>Already have an account?</Text>
            </View>
            <View style={{
                width: screenWidth,
                height: screenHeight * 0.022,
            }}>
                <Image style={styles.halfBlueCircle} source={icons['icCircleTwo']}></Image>
            </View>
            <View style={styles.viewLoginContainer}>
                <TouchableOpacity style={{
                    position: 'absolute',
                }} onPress={() => { navigation.navigate('BoardList') }}>
                    <Image style={{
                        resizeMode: 'center',
                    }} source={icons['loginBtn']}>
                    </Image>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomImageContainer}>
                <Image style={styles.bottomImage} source={icons['logonBot']}></Image>
                <Image style={styles.designone} source={icons['designone']}></Image>
                <Image style={styles.whiteCircle} source={icons['icCircleOne']}></Image>
                <Image style={styles.fullBlueCircle} source={icons['icCircleTwo']}></Image>
                <Image style={styles.whitePlus} source={icons['icPlusOne']}></Image>
                <Image style={styles.yellowBigPlus} source={icons['icPlusTwo']}></Image>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    getStartedText: {
        color: 'rgb(1, 32, 96)',
        fontSize: 26,
        fontFamily: 'Poppins-Bold'
    },
    viewLearnContainer: {
        width: screenWidth * 0.557,
        height: screenHeight * 0.253,
        position: 'absolute',
        top: 0,
        left: screenWidth * 0.0203,
    },
    viewLearnTextContainer: {
        position: 'absolute',
        height: screenHeight * 0.253,
        left: screenWidth * 0.1824,
        flexDirection: 'column'
    },
    learnText: {
        color: 'rgb(50, 97, 155)',
        fontSize: 18,
        fontFamily: 'Poppins-ExtraBold',
        top: screenHeight * 0.0993
    },
    viewTechContainer: {
        width: screenWidth * 0.557,
        height: screenHeight * 0.253,
        position: 'absolute',
        top: 0,
        right: screenWidth * 0.0285
    },
    viewTechTextContainer: {
        position: 'absolute',
        height: screenWidth * 0.548,
        right: screenWidth * 0.1768,
        flexDirection: 'column'
    },
    topImage: {
        resizeMode: 'stretch',
        width: screenWidth,
        height: screenHeight * 0.203
    },
    bottomImage: {
        alignSelf: "flex-end",
        resizeMode: 'stretch',
        width: screenWidth,
        height: screenHeight * 0.186,
    },
    bottomImageContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        // position: 'absolute',
        bottom: 0,
        //  backgroundColor: 'pink',
    },
    viewStartedContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 45,
        marginTop: screenHeight * 0.031897
    },
    subTextStyle: {
        color: 'rgb(162, 172, 89)',
        fontSize: 10,
        fontFamily: 'Poppins-Medium',
        top: screenHeight * 0.0993
    },
    viewAlreadyAccContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: screenHeight * 0.044
    },
    alreadyAccText: {
        color: 'rgb(51, 51, 51)',
        fontSize: 16,
        fontFamily: 'Poppins-Medium'
    },
    halfBlueCircle: {
        width: screenHeight * 0.022,
        height: screenHeight * 0.022,
        left: -((screenHeight * 0.022) / 2.0),
        top: 0
    },
    viewLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: screenWidth,
        height: screenWidth * 0.13333,
        zIndex: 1
    },
    fullBlueCircle: {
        width: screenWidth * 0.05493,
        height: screenWidth * 0.05493,
        right: screenWidth * 0.541,
        position: 'absolute',
        bottom: screenWidth * 0.1048
    },
    whitePlus: {
        width: screenWidth * 0.056,
        height: screenWidth * 0.056,
        left: screenWidth * 0.07627,
        position: 'absolute',
        // bottom: screenWidth * 0.07573
        bottom: screenHeight * 0.03498
    },
    yellowBigPlus: {
        width: screenWidth * 0.056,
        height: screenWidth * 0.056,
        left: screenWidth * 0.308,
        position: 'absolute',
        // bottom: screenWidth * 0.3717
        bottom: screenHeight * 0.172
    },
    whiteCircle: {
        width: screenWidth * 0.08,
        height: screenWidth * 0.08,
        right: screenWidth * 0.105,
        position: 'absolute',
        // bottom: screenWidth * 0.1597
        bottom: screenHeight * 0.074
    },
    designone: {
        // width: screenWidth * 0.6133,
        width: (screenHeight * 0.287) * 0.9888,
        // height: screenWidth * 0.62,
        height: screenHeight * 0.287,
        right: 0,
        position: 'absolute',
        bottom: screenWidth * 0.055,
        //backgroundColor:'green',
        resizeMode: 'stretch',
    },
    yellowCircle: {
        width: screenWidth * 0.0512,
        height: screenWidth * 0.0512,
        right: screenWidth * 0.0731,
        position: 'absolute',
        bottom: -((screenWidth * 0.0512) / 2.0)
    },
    icPlusFourBot: {
        width: screenWidth * 0.0165,
        height: screenWidth * 0.0165,
        left: screenWidth * 0.1864,
        position: 'absolute',
        bottom: -((screenWidth * 0.0165) / 2.0)
    },
    icPlusFourTop: {
        width: screenWidth * 0.0165,
        height: screenWidth * 0.0165,
        left: screenWidth * 0.0584,
        position: 'absolute',
        top: 0
    },
    teachBg: {
        resizeMode: 'center',
        position: 'absolute',
        width: screenWidth * 0.7173,
        height: screenHeight * 0.328,
        // height: screenWidth * 0.709,
        top: - (screenWidth * 0.0507),
        left: - (screenWidth * 0.0804)
    },
    icPlusThree: {
        width: screenWidth * 0.0345,
        height: screenWidth * 0.0345,
        left: screenWidth * 0.0917,
        position: 'absolute',
        bottom: screenWidth * 0.036
    },
    learnBg: {
        resizeMode: 'center',
        position: 'absolute',
        width: screenWidth * 0.7173,
        // height: screenWidth * 0.709,
        height: screenHeight * 0.328,
        top: - (screenWidth * 0.0507),
        left: - (screenWidth * 0.0804)
    },
    icPlusFive: {
        width: screenWidth * 0.0256,
        height: screenWidth * 0.0256,
        right: screenWidth * 0.0648,
        position: 'absolute',
        bottom: screenWidth * 0.0056
    }
})