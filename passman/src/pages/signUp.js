import React, { useState } from 'react'
import { View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import ColorStyles from '../utils/ColorStyles'
import MainStyle from '../utils/Styles'
import {TextInput, Text} from 'react-native-paper'

const SignUp = () => {
    const [FName,setFName] = useState('')
    const [LName,setLName] = useState('')
    const [UName,setUName] = useState('')
    const [MailId,setMainID] = useState('')
    const [Phone,setPhone] = useState('')
    const [Password,setPasssword] = useState('')
    const [CPassword,setCPassword] = useState('')

    function handelSubmit () {
        if(Password !== CPassword){
            //err
        } else if(FName === '' || LName === '' || UName === '' || MailId === '' || Phone === '' || Password === '' || CPassword === ''){
            //err
        } else {

        }
    }

    return(
        <SafeAreaView style={[ColorStyles.bodyBackground, MainStyle.container]}>
            <View style={MainStyle.registerHeadingView}>
                <Text style={[ColorStyles.textColor, MainStyle.registerHeadingText]}>Hi, Welcome to Passman</Text>
                <Text style={[ColorStyles.textColor, MainStyle.registerHeadingText]}>A tool to store your passwords securely.</Text>
            </View>
            <ScrollView style={MainStyle.registerBodyView}>
                <View style={MainStyle.registerRowView}>
                    <Text style={[ColorStyles.textColor, MainStyle.registerTbText]}>First Name</Text>
                    <View style={MainStyle.registerTbView}>
                        <TextInput style={MainStyle.registerTb} theme={{ colors: { text: '#B24BF3' } }} placeholder="Jon" placeholderTextColor={'#B24BF3'} onChange={(val) => setFName(val)}/>
                    </View>
                </View>
                <View style={MainStyle.registerRowView}>
                    <Text style={[ColorStyles.textColor, MainStyle.registerTbText]}>Last Name</Text>
                    <View style={MainStyle.registerTbView}>
                        <TextInput style={MainStyle.registerTb} theme={{ colors: { text: '#B24BF3' } }} placeholder="Doe" placeholderTextColor={'#B24BF3'} onChange={(val) => setLName(val)} />
                    </View>
                </View>
                <View style={MainStyle.registerRowView}>
                    <Text style={[ColorStyles.textColor, MainStyle.registerTbText]}>User Name</Text>
                    <View style={MainStyle.registerTbView}>
                        <TextInput style={MainStyle.registerTb} theme={{ colors: { text: '#B24BF3' } }} placeholder="Jon Doe" placeholderTextColor={'#B24BF3'} onChange={(val) => setUName(val) } />
                    </View>
                </View>
                <View style={MainStyle.registerRowView}>
                    <Text style={[ColorStyles.textColor, MainStyle.registerTbText]}>Mail ID</Text>
                    <View style={MainStyle.registerTbView}>
                        <TextInput style={MainStyle.registerTb} theme={{ colors: { text: '#B24BF3' } }} keyboardType="email-address" placeholder='jon.doe@egmail.com' placeholderTextColor={'#B24BF3'} onChange={(val) => setMainID(val)} />
                    </View>
                </View>
                <View style={MainStyle.registerRowView}>
                    <Text style={[ColorStyles.textColor, MainStyle.registerTbText]}>Phone Number</Text>
                    <View style={MainStyle.registerTbView}>
                        <TextInput style={MainStyle.registerTb} theme={{ colors: { text: '#B24BF3' } }} keyboardType="numeric" placeholder='+91 1233245786' placeholderTextColor={'#B24BF3'} maxLength={10}/>
                    </View>
                </View>
                <View style={MainStyle.registerRowView}>
                    <Text style={[ColorStyles.textColor, MainStyle.registerTbText]}>Password</Text>
                    <View style={MainStyle.registerTbView}>
                        <TextInput style={MainStyle.registerTb} theme={{ colors: { text: '#B24BF3' } }} placeholder="Axz123$3@," placeholderTextColor={'#B24BF3'} secureTextEntry={true} maxLength={20}/>
                    </View>
                </View>
                <View style={MainStyle.registerRowView}>
                    <Text style={[ColorStyles.textColor, MainStyle.registerTbText]}>Confirm Password</Text>
                    <View style={MainStyle.registerTbView}>
                        <TextInput style={MainStyle.registerTb} theme={{ colors: { text: '#B24BF3' } }} placeholder="Axz123$3@," placeholderTextColor={'#B24BF3'} secureTextEntry={true} maxLength={20}/>
                    </View>
                </View>
            </ScrollView>
            <View style={MainStyle.registerMidBodyView}>
                <TouchableOpacity style={MainStyle.registerButton}>
                    <Text style={[ColorStyles.textColor, MainStyle.registerButtonText]}>Register Now</Text>
                </TouchableOpacity>
            </View>
            <View style={MainStyle.registerFooterView}>
                <TouchableOpacity>
                    <Text style={[MainStyle.registerfooterText, ColorStyles.footerLoginText]}>Already Have an Account ? &nbsp; Login now</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SignUp