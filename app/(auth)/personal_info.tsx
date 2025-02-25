import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Ionicons from '@expo/vector-icons/Ionicons'
import { router } from 'expo-router'
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { Alert, Modal, Pressable } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Fontisto from '@expo/vector-icons/Fontisto'

const PersonalInfo = () => {

    const navigateHomeAddress = () => {
        router.push("/(auth)/home_address")
    }

    const navigateCountryResidence = () => {
        router.push("/(auth)/country_residence")
    }

    const [date, setDate] = useState(dayjs());

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.backIconCon}>
                    <TouchableOpacity activeOpacity={0.8} onPress={navigateHomeAddress}>
                        <Entypo name="chevron-thin-left" size={24} color="#333" style={styles.backIcon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <View>
                        <Text style={styles.emailtextStyle}>Add your personal info</Text>
                        <Text>This info needs to be accurate with your ID document.</Text>
                    </View>
                    <View style={styles.emailInputCon}>
                        <Text style={styles.emailTitle}>Full Name</Text>
                        <View style={styles.formControl}>
                            <TextInput
                                style={styles.emailInput}
                                placeholder='Mr. John Doe'
                            />
                        </View>
                        <View style={styles.formControl}>
                            <Text style={styles.emailTitle}>Username</Text>
                            <TextInput
                                style={styles.emailInput}
                                placeholder='@username'
                            />
                        </View>
                        <View style={styles.formControl}>
                            <Text style={styles.emailTitle}>Date of Birth</Text>
                            <View style={styles.dateCon}>
                                <View style={styles.dateIcon}>
                                    <Fontisto name='date' color='#ddd' size={16} />
                                </View>
                                <TextInput style={styles.dateInput} onPress={() => setModalVisible(true)} placeholder='MM/DD/YYYY' />
                            </View>

                        </View>
                    </View>
                </View>
                <SafeAreaProvider>
                    <SafeAreaView style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <DateTimePicker
                                        mode="single"
                                        date={date}
                                        onChange={(params) => setDate(params.date)}
                                    />
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Confirm</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                    </SafeAreaView>
                </SafeAreaProvider>
                <View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer} onPress={navigateCountryResidence}>
                        <Text style={styles.btnText}>Continue</Text>
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

export default PersonalInfo