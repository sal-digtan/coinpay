import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Ionicons from '@expo/vector-icons/Ionicons'
import { router } from 'expo-router'

const AccountSetup = () => {

    const navigateIndex = () => {
        router.push("/(auth)")
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.backIconCon}>
                    <TouchableOpacity activeOpacity={0.8} onPress={navigateIndex}>
                        <Entypo name="chevron-thin-left" size={24} color="#333" style={styles.backIcon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <View>
                        <Text style={styles.emailtextStyle}>Add your Email</Text>
                        <Text>This info needs to be accurate with your ID document.</Text>
                    </View>
                    <View style={styles.emailInputCon}>
                        <Text style={styles.emailTitle}>Email</Text>
                        <View>
                            <TextInput
                                style={styles.emailInput}
                                placeholder='name@example.com'
                            />
                            <Ionicons name='mail-outline' size={24} color="#eee" style={styles.IconPos} />
                        </View>
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
    IconPos: {
        position: "absolute",
        top: "50%",
        end: "0%",
        transform: "translate(-50%, -50%)"
    }
})

export default AccountSetup