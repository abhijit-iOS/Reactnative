import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    StyleSheet,
    FlatList,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';
import { screenWidth, screenHeight } from '../theme/size'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { icons } from '../component/icon/icons/index'



const BoardListScreen = () => {
    const insets = useSafeAreaInsets();
    const [selectedId, setSelectedId] = useState(null);
    const arrBoards = [
        {
            id: 1,
            title: 'ICSE',
            subTitle: '(grade 1-12)',
            image: icons['icICSEbg'],
            isSelected: false,
            width: 245,
            height: 253,
            marginTop: -10
        },
        {
            id: 2,
            title: 'CBSE',
            subTitle: '(grade 1-12)',
            image: icons['icCBSEbg'],
            isSelected: false,
            width: 275,
            height: 272,
            marginTop: -10
        },
        {
            id: 3,
            title: 'IGSCE',
            subTitle: '(grade 1-12)',
            image: icons['icIGSCEbg'],
            isSelected: false,
            width: 335,
            height: 332,
            marginTop: -18
        },
        {
            id: 4,
            title: 'A / AS',
            subTitle: '(grade 1-12)',
            image: icons['icAASbg'],
            isSelected: false,
            width: 317,
            height: 325,
            marginTop: -18
        },
        {
            id: 5,
            title: 'SSC',
            subTitle: '(grade 1-12)',
            image: icons['icSSCbg'],
            isSelected: false,
            width: 245,
            height: 253,
            marginTop: -14
        },
        {
            id: 6,
            title: 'IBDP',
            subTitle: '(grade 1-12)',
            image: icons['icIBDPbg'],
            isSelected: false,
            width: 275,
            height: 272,
            marginTop: -14
        },
        {
            id: 7,
            title: 'PYP',
            subTitle: '(grade 1-12)',
            image: icons['icPYPbg'],
            isSelected: false,
            width: 335,
            height: 332,
            marginTop: -16
        },
        {
            id: 8,
            title: 'MYP',
            subTitle: '(grade 1-12)',
            image: icons['icMYPbg'],
            isSelected: false,
            width: 317,
            height: 325,
            marginTop: -16
        },
        {
            id: 9,
            title: 'GSCE',
            subTitle: '(grade 1-12)',
            image: icons['icGSCEbg'],
            isSelected: false,
            width: 245,
            height: 253,
            marginTop: -14
        },
        {
            id: 10,
            title: 'IB',
            subTitle: '(grade 1-12)',
            image: icons['icIBbg'],
            isSelected: false,
            width: 275,
            height: 272,
            marginTop: -14
        },
        {
            id: 11,
            title: 'NIOS',
            subTitle: '(grade 1-12)',
            image: icons['icNIOSbg'],
            isSelected: false,
            width: 335,
            height: 332,
            marginTop: -18
        },
        {
            id: 12,
            title: 'CODING\n& TECH',
            subTitle: '(grade 1-12)',
            image: icons['icCODINGTECHbg'],
            isSelected: false,
            width: 317,
            height: 325,
            marginTop: -18
        }];

    const BoardView = (item, index) => {
        return (
            <TouchableOpacity style={{
                flex: 1,
            }}
                onPress={() => {
                    setSelectedId(item.id);
                }}
            >
                <View style={styles.gridView}>
                    {
                        item.id === selectedId ?
                            <Image
                                key={1}
                                style={{
                                    ...styles.selectedImage,
                                    width: item.width,
                                    height: item.height
                                }}
                                source={item.image}></Image> :
                            <Image
                                key={2}
                                style={{
                                    ...styles.nonSelectedImage,
                                    width: item.width,
                                    height: item.height
                                }}
                                source={item.image}></Image>
                    }
                    <View style={{ marginTop: item.marginTop, marginLeft: -12 }}>
                        <Text style={{
                            ...styles.titleText,
                            color: item.id === selectedId ? 'white' : 'rgb(50, 97, 155)'
                        }}>{item.title}</Text>
                        <Text style={{
                            ...styles.subtitleText,
                            color: item.id === selectedId ? 'rgb(1, 32, 96)' : 'rgb(162, 172, 189)'
                        }}>{item.subTitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
    return (
        <SafeAreaView style={styles.mainView}>

            <View style={{ ...styles.chooseView, marginTop: screenWidth * ((78 - insets.top) / 375) }}>
                <Text style={styles.chooseText}>Choose your board!</Text>
            </View>
            <View style={{ ...styles.selectView }}>
                <Text style={styles.selectText}>Please, select at least one</Text>
            </View>

            <FlatList
                style={{ ...styles.listView, marginBottom: -insets.bottom }}
                data={arrBoards}
                keyExtractor={(item, index) => index}
                numColumns={2}
                //extraData={selectedId}
                renderItem={
                    ({ item, index }) => (
                        BoardView(item, index)
                    )
                }
                ListFooterComponent={() => {
                    return (
                        <View style={styles.footerView}>
                            <View style={styles.nextContainer}>
                                <TouchableOpacity style={{
                                    position: 'absolute',
                                    //backgroundColor:'blue',
                                }} onPress={() => { }}>
                                    <Image style={{
                                        resizeMode: 'center',
                                    }} source={icons['nextBtn']}>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.bottomImageContainer}>
                                <Image style={styles.bottomImage} source={icons['boardBottomBg']}></Image>
                                <Image style={styles.homeSchool} source={icons['homeSchool']}></Image>
                                <Image style={styles.spiralArrow} source={icons['icSpiArrowBoard']}></Image>
                            </View>
                        </View>
                    )
                }}
            >
            </FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    selectedImage: {
        resizeMode: 'center',
        position: 'absolute',
        // width: 275,
        // height: 212,
        tintColor: 'rgb(1, 32, 96)'
    },
    nonSelectedImage: {
        resizeMode: 'center',
        position: 'absolute',
        // width: 275,
        // height: 212,
    },
    nextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: screenWidth,
        height: screenWidth * 0.13333,
        zIndex: 1
    },
    homeSchool: {
        resizeMode: 'center',
        position: 'absolute',
        alignSelf: 'center',
        bottom: screenWidth * 0.102
    },
    spiralArrow: {
        resizeMode: 'center',
        position: 'absolute',
        alignSelf: 'center',
        right: screenWidth * 0.1968,
        bottom: screenWidth * 0.2568
    },
    footerView: {
        height: screenWidth * 0.816
    },
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    listView: {
        width: screenWidth,
        marginTop: 17
        // backgroundColor: 'yellow',
        //marginBottom: 0
    },
    chooseView: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 39
    },
    chooseText: {
        color: 'rgb(255, 192, 0)',
        fontSize: 28,
        fontFamily: 'Poppins-Bold'
    },
    selectView: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 25
    }, selectText: {
        color: 'rgb(162, 172, 189)',
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        marginTop: 5
    },
    columnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //padding: 10,
        // marginBottom: 40
    },
    gridView: {
        flex: 1,
        justifyContent: 'center',
        aspectRatio: 1,
        alignItems: 'center',
        // backgroundColor:'pink'
    },
    gridInnerView: {
        //marginTop:-10
        // backgroundColor: 'blue',
        //position: 'absolute',
        //alignSelf:'center'
    },
    titleText: {
        fontSize: 18,
        fontFamily: 'Poppins-ExtraBold',
        alignSelf: 'center',
    },
    subtitleText: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
    },
    bottomImageContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        // position: 'absolute',
        bottom: 0,
        //  backgroundColor: 'pink',
    },
    bottomImage: {
        alignSelf: "flex-end",
        resizeMode: 'stretch',
        width: screenWidth,
        height: screenWidth * 0.582,
    }
})

export default BoardListScreen;