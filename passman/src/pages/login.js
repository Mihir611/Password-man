import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import FntIcns from 'react-native-vector-icons/FontAwesome5';
import ColorStyles from '../utils/ColorStyles'
import MainStyle from '../utils/Styles'

const Login = () => {
    return(
        <SafeAreaView style={[ColorStyles.bodyBackground, MainStyle.container]}>
            <View style={MainStyle.LoginHeaderView}>
                <Text style={[ColorStyles.textColor, MainStyle.LoginHeaderText]}>Hello</Text>
                <Text style={[ColorStyles.textColor, MainStyle.LoginHeaderSubText]}>Sign in to access your passwords</Text>
            </View>
            <View style={MainStyle.LoginBodyView}>
                <View style={[MainStyle.LoginTextboxesView]}>
                    <TextInput mode='flat' label={'Email'} keyboardType='email-address' placeholder='Enter the Email Address' right={<TextInput.Icon name="mail" />} />
                </View>
                <View style={[MainStyle.LoginTextboxesView]}>
                    <TextInput mode='flat' label={'Password'} placeholder='Enter the Password' secureTextEntry right={<TextInput.Icon name="eye" />}/>
                    <View style={MainStyle.LoginForgotPasswordView}>
                        <Text style={[ColorStyles.textColor, MainStyle.forgotPassword]}>Forgot your Password ?</Text>
                    </View>
                </View>
            </View>
            <View style={MainStyle.LoginButtonView}>
                <Button icon="login" mode="contained" dark={true} style={MainStyle.LoginButton}>LOGIN</Button>
                <View style={MainStyle.signUpView}>
                    <Text style={ColorStyles.textColor}>Don't have an account?&nbsp;&nbsp;</Text>
                    <TouchableOpacity>
                        <Text style={[ColorStyles.textColor, ColorStyles.Link]}>Create One</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login