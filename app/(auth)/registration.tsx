import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { router } from 'expo-router'
import imagesPath from '../../constants/imagesPath'
import { Linking } from 'react-native';

const registration = () => {

    const navigateIndex = () => {
        router.push("/(auth)")
    }

    const navigateConfirmPhone = () => {
        router.push("/(auth)/confirm_phone")
    }

    return (
        <View style={styles.parentCon}>
            <View style={styles.backIconCon}>
                <TouchableOpacity activeOpacity={0.8} onPress={navigateIndex}>
                    <Entypo name="chevron-thin-left" size={24} color="#333" style={styles.backIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.body}>
                    <View>
                        <Image source={imagesPath.sliderImg1} resizeMode='cover' />
                    </View>
                    <View>
                        <Text style={styles.regTitle}>Create your Coinpay account</Text>
                        <Text style={styles.textCon}>Coinpay is a powerful tool that allows you to easily send, receive, and track all your transactions. </Text>
                    </View>
                    <View>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer} onPress={navigateConfirmPhone}>
                            <Text style={styles.btnText}>Sign up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.loginBtnCon}>
                            <Text style={styles.loginBtn}>Login in</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.termsTextCon}>
                        <Text>By continuing you accept our
                            <Text style={{ color: "#304FFE" }} onPress={() => Linking.openURL('http://google.com')}>Terms of Service</Text>
                            and <Text style={{ color: "#304FFE" }} onPress={() => Linking.openURL('http://google.com')}>Privacy Policy</Text> </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: verticalScale(10),
        backgroundColor: "#fff",
    },
    body: {
        alignItems: "center",
        gap: verticalScale(10),
        padding: moderateScale(20)
    },
    backIconCon: {
        paddingStart: moderateScale(10),
        borderBottomColor: "#304FFE",
        borderBottomWidth: moderateScale(3),
        width: moderateScale(50),
    },
    backIcon: {
        paddingBottom: moderateScale(5)
    },
    btnContainer: {
        backgroundColor: "#304FFE",
        width: moderateScale(330),
        alignItems: "center",
        padding: moderateScale(20),
        borderRadius: moderateScale(50),
        marginBottom: moderateScale(10),
        color: "#fff",
    },
    btnText: {
        color: "#fff",
    },
    loginBtn: {
        color: "#304FFE"
    },
    loginBtnCon: {
        backgroundColor: "#fff",
        width: moderateScale(330),
        alignItems: "center",
        padding: moderateScale(20),
        borderRadius: moderateScale(50),
        marginBottom: moderateScale(10),
        borderColor: "#304FFE",
        borderWidth: 1
    },
    formControl: {
        marginBottom: moderateScale(10)
    },
    parentCon: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingVertical: verticalScale(50),
        backgroundColor: "#fff",
    },
    regTitle: {
        fontSize: moderateScale(30),
        paddingTop: moderateScale(10),
        textAlign: "center",
    },
    textCon: {
        textAlign: "center",
        paddingTop: moderateScale(10),
        paddingBottom: moderateScale(20),
    },
    termsTextCon: {
        textAlign: "center",
        paddingBottom: moderateScale(10)
    }
})

export default registration