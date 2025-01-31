import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { router } from 'expo-router'
import DropDownPicker from 'react-native-dropdown-picker';

const country_residence = () => {

    const navigatePersonalInfo = () => {
        router.push("/(auth)/personal_info")
    }

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Bangladesh', value: 'bangladesh' },
        { label: 'United States', value: 'united states' },
        { label: 'Singapore', value: 'singapore' },
        { label: 'India', value: 'india' },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.backIconCon}>
                    <TouchableOpacity activeOpacity={0.8} onPress={navigatePersonalInfo}>
                        <Entypo name="chevron-thin-left" size={24} color="#333" style={styles.backIcon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <View>
                        <Text style={styles.emailtextStyle}>Country of Residence</Text>
                        <Text>This info needs to be accurate with your ID document.</Text>
                    </View>
                    <View style={styles.emailInputCon}>
                        <Text style={styles.emailTitle}>Full Name</Text>
                        <View style={styles.formControl}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer}>
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
        padding: moderateScale(20),
        borderRadius: moderateScale(50),
        marginStart: moderateScale(22),
        marginEnd: moderateScale(20),
    },
    btnText: {
        color: "#121212",
    },
    formControl: {
        marginBottom: moderateScale(10)
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: moderateScale(20),
        backgroundColor: 'white',
        borderRadius: moderateScale(20),
        padding: moderateScale(35),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: moderateScale(300),
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    dateCon: {
        position: "relative",
    },
    dateIcon: {
        position: "absolute",
        top: "50%",
        left: "5%",
        transform: "translate(-50%, -50%)"
    },
    dateInput: {
        height: 50,
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: moderateScale(10),
        paddingStart: moderateScale(28),
    },
})

export default country_residence