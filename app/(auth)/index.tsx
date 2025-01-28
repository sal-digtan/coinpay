import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import { verticalScale, moderateScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context'
import imagesPath from '@/constants/imagesPath';
import Carousel from 'react-native-reanimated-carousel';
import { router } from 'expo-router'

const Auth = () => {
    const width = Dimensions.get('window').width;

    const navigateAccountSetup = () => {
        router.push("/(auth)/registration")
    }

    const slides = [
        {
            id: 1,
            img: imagesPath.sliderImg1,
            text: "Trusted by millions of people, part of one part",
        },
        {
            id: 2,
            img: imagesPath.sliderImg2,
            text: "Spend money abroad, and track your expense",
        },
        {
            id: 3,
            img: imagesPath.sliderImg3,
            text: "Receive Money From Anywhere In The World",
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Carousel
                    loop
                    width={width}
                    height={width}
                    autoPlay={true}
                    data={[...new Array(3).keys()]}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    renderItem={({ index }) => (
                        <View>
                            <View style={styles.body}>
                                <Image source={imagesPath.sliderImg1} />
                                <Text style={styles.sliderTitle}>Trusted by millions of people, part of one part</Text>
                            </View>
                            <View style={styles.body}>
                                <Image source={imagesPath.sliderImg2} />
                                <Text style={styles.sliderTitle}>Spend money abroad, and track your expense</Text>
                            </View>
                            <View style={styles.body}>
                                <Image source={imagesPath.sliderImg3} />
                                <Text style={styles.sliderTitle}>Receive Money From Anywhere In The World</Text>
                            </View>
                        </View>
                    )}
                />
                <View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.sliderBtn} onPress={navigateAccountSetup}>
                        <Text style={styles.sliderBtnText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: verticalScale(50),
        backgroundColor: "#fff",
    },
    body: {
        alignItems: "center",
        gap: verticalScale(10),
    },
    sliderTitle: {
        fontSize: moderateScale(30),
        fontWeight: 'semibold',
        textAlign: "center",
    },
    sliderBtn: {
        backgroundColor: "#304FFE",
        width: moderateScale(300),
        padding: moderateScale(10),
        borderRadius: moderateScale(20),
    },
    sliderBtnText: {
        textAlign: "center",
        color: "#fff",
    }
})

export default Auth