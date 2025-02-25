import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { router } from 'expo-router'
import { Linking } from 'react-native';
import imagesPath from '@/constants/imagesPath';
import countryDialCode from '@/constants/countryDialCode'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import AntDesign from '@expo/vector-icons/AntDesign'

const CreateAccount = () => {

    const navigateConfirmPhone = () => {
        router.push("/(auth)/confirm_phone")
    }

    const navigateAccountSetup = () => {
        router.push("/(auth)/account_setup")
    }

    const [verifyBtnClicked, setVerifyBtnClicked] = useState(false)

    const [modalVisible, setModalVisible] = useState(false);

    const [codeInput, setCodeInput] = useState(
        [
            { code1: "" },
            { code2: "" },
            { code3: "" },
            { code4: "" },
            { code5: "" },
            { code6: "" },
        ])

    const [dialCode, setDialCode] = useState("")

    return (
        <View style={styles.parentCon}>
            <View style={styles.backIconCon}>
                <TouchableOpacity activeOpacity={0.8} onPress={navigateConfirmPhone}>
                    <Entypo name="chevron-thin-left" size={24} color="#333" style={styles.backIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.body}>
                    <View>
                        <Text style={styles.regTitle}>Create an Account</Text>
                        <Text style={styles.textCon}>Coinpay is a powerful tool that allows you to easily send, receive, and track all your transactions. </Text>
                    </View>
                    <View style={styles.codeInputCon}>
                        <View>
                            {/* {countryDialCode.map((item, index) =>
                                <View>
                                <Image key={index} source={item.dial_code === dialCode ? item.image : ""} width={24} />
                                </View>
                                )} */}
                            <Text>Phone</Text>
                            <TextInput style={styles.codeInputDial} onChangeText={text => setDialCode(text)} maxLength={4} />
                        </View>

                        <TextInput style={styles.codeInputNumber} placeholder='Mobile Number' />
                    </View>
                    <View style={styles.passwordCon}>
                        <Text>Password</Text>
                        <View style={styles.passwordLock}>
                            <EvilIcons name='lock' size={24} color="#ddd" />
                        </View>
                        <View style={styles.passwordEye}>
                            <AntDesign name='eyeo' size={18} color="#ddd" />
                        </View>
                        <TextInput style={styles.codeInputPassword} />
                    </View>
                    <View>
                        <Text>Didn't get a code?
                            <Text style={{ color: "#304FFE" }} onPress={() => Linking.openURL('http://google.com')}>Resend</Text>
                        </Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.8} style={verifyBtnClicked ? styles.btnClickedCon : styles.btnContainer} onPress={navigateAccountSetup}>
                        <Text style={verifyBtnClicked ? styles.btnTextClicked : styles.btnText}>Sign up</Text>
                    </TouchableOpacity>
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
    btnClickedCon: {
        backgroundColor: "#CBCBCB",
        width: moderateScale(330),
        alignItems: "center",
        padding: moderateScale(20),
        borderRadius: moderateScale(50),
        marginBottom: moderateScale(10),
    },
    btnTextClicked: {
        color: "#121212"
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
        textAlign: "left",
    },
    textCon: {
        textAlign: "left",
        paddingTop: moderateScale(10),
        paddingBottom: moderateScale(20),
    },
    termsTextCon: {
        textAlign: "left",
        paddingBottom: moderateScale(10)
    },
    codeInputDial: {
        borderWidth: moderateScale(1),
        padding: moderateScale(5),
        borderBottomColor: "#CBCBCB",
        marginEnd: moderateScale(5),
        width: moderateScale(60),
        borderRadius: moderateScale(5)
    },
    codeInputNumber: {
        borderWidth: moderateScale(1),
        padding: moderateScale(10),
        borderBottomColor: "#CBCBCB",
        marginEnd: moderateScale(5),
        width: moderateScale(250),
        borderRadius: moderateScale(5)
    },
    codeInputPassword: {
        borderWidth: moderateScale(1),
        padding: moderateScale(10),
        borderBottomColor: "#CBCBCB",
        marginEnd: moderateScale(5),
        width: moderateScale(313),
        borderRadius: moderateScale(5)
    },
    codeInputCon: {
        flexDirection: "row",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4,
        elevation: 5,
    },
    modalbutton: {
        borderRadius: moderateScale(25),
        padding: moderateScale(15),
        elevation: 2,
        width: moderateScale(250)
    },
    modalbuttonOpen: {
        backgroundColor: '#F194FF',
    },
    modalbuttonClose: {
        backgroundColor: '#2196F3',
        marginTop: moderateScale(10),
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: moderateScale(24),
    },
    passwordCon: {
        position: 'relative',
    },
    passwordLock: {
        position: 'absolute',
        top: '65%',
        left: '5%',
        transform: 'translate(-50%, -50%)',
    },
    passwordEye: {
        position: 'absolute',
        top: '65%',
        right: '3%',
        transform: 'translate(-50%, -50%)',
    }
})

export default CreateAccount