import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Ionicons from '@expo/vector-icons/Ionicons'
import { router } from 'expo-router'

const HomeAddress = () => {

    const navigateAccountSetup = () => {
        router.push("/(auth)/account_setup")
    }

    const navigatePersonalInfo = () => {
        router.push("/(auth)/personal_info")
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.backIconCon}>
                    <TouchableOpacity activeOpacity={0.8} onPress={navigateAccountSetup}>
                        <Entypo name="chevron-thin-left" size={24} color="#333" style={styles.backIcon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <View>
                        <Text style={styles.emailtextStyle}>Home Address</Text>
                        <Text>This info needs to be accurate with your ID document.</Text>
                    </View>
                    <View style={styles.emailInputCon}>
                        <Text style={styles.emailTitle}>Address Line</Text>
                        <View style={styles.formControl}>
                            <TextInput
                                style={styles.emailInput}
                                placeholder='Mr. John Doe'
                            />
                        </View>
                        <View style={styles.formControl}>
                            <Text style={styles.emailTitle}>City</Text>
                            <TextInput
                                style={styles.emailInput}
                                placeholder='City, State'
                            />
                        </View>
                        <View style={styles.formControl}>
                            <Text style={styles.emailTitle}>Postcode</Text>
                            <TextInput
                                style={styles.emailInput}
                                placeholder='Ex: 00000'
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer} onPress={navigatePersonalInfo}>
                    <Text style={styles.btnText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingVertical: verticalScale(50),
        backgroundColor: "#fff",
    },
    body: {
        alignItems: "flex-start",
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
    emailtextStyle: {
        fontSize: moderateScale(30),
        paddingBottom: moderateScale(5)
    },
    emailInput: {
        height: 50,
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: moderateScale(10)
    },
    emailInputCon: {
        paddingTop: moderateScale(30),
        position: "relative"
    },
    emailTitle: {
        paddingBottom: moderateScale(5)
    },
    btnContainer: {
        backgroundColor: "#B8B8B8",
        width: moderateScale(330),
        alignItems: "center",
        marginStart: moderateScale(22),
        marginEnd: moderateScale(20),
        padding: moderateScale(20),
        borderRadius: moderateScale(50),
    },
    btnText: {
        color: "#121212",
    },
    formControl: {
        marginBottom: moderateScale(10)
    }
})

export default HomeAddress