import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, ToastAndroid} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import FntIcns from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import {LOGIN_URL} from '@env';
import ColorStyles from '../utils/ColorStyles';
import MainStyle from '../utils/Styles';

const Login = (props) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const userLogin = async () => {
    
  }
  return (
    <SafeAreaView style={[ColorStyles.bodyBackground, MainStyle.container]}>
      <View style={MainStyle.LoginHeaderView}>
        <Text style={[ColorStyles.textColor, MainStyle.LoginHeaderText]}>
          Hello
        </Text>
        <Text style={[ColorStyles.textColor, MainStyle.LoginHeaderSubText]}>
          Sign in to access your passwords
        </Text>
      </View>
      <View style={MainStyle.LoginBodyView}>
        <View style={[MainStyle.LoginTextboxesView]}>
          <TextInput
            mode="flat"
            label={'Email'}
            keyboardType="email-address"
            placeholder="Enter the Email Address"
            right={<TextInput.Icon name="mail" />}
            onChangeText={(e) => setEmail(e)}
          />
        </View>
        <View style={[MainStyle.LoginTextboxesView]}>
          <TextInput
            mode="flat"
            label={'Password'}
            placeholder="Enter the Password"
            secureTextEntry
            right={<TextInput.Icon name="eye" />}
            onChangeText={(e) => setPassword(e)}
          />
          <View style={MainStyle.LoginForgotPasswordView}>
            <Text style={[ColorStyles.textColor, MainStyle.forgotPassword]}>
              Forgot your Password ?
            </Text>
          </View>
        </View>
      </View>
      <View style={MainStyle.LoginButtonView}>
        <Button
          icon="login"
          mode="contained"
          dark={true}
          style={MainStyle.LoginButton} 
          onPress={() => {
            if(Email === '') {
                ToastAndroid.show("Please enter the Registered Email Address",ToastAndroid.CENTER, ToastAndroid.SHORT);
            } else if (Password === '') {
                ToastAndroid.show("Please enter the Password",ToastAndroid.CENTER, ToastAndroid.SHORT);
            } else {
                let data ={
                    "Mail_ID":Email,
                    "Login_Password":Password
                }
                axios.post(LOGIN_URL,data).then((result) => {
                    // if(result.data.response_code === 0){
                    //   props.navigation.navigate('HomeComponent')
                    // }
                    console.log(result)
                }).catch((err) => {
                    console.log(err)
                })
            }
          }}>
          LOGIN
        </Button>
        <View style={MainStyle.signUpView}>
          <Text style={ColorStyles.textColor}>
            Don't have an account?&nbsp;&nbsp;
          </Text>
          <TouchableOpacity>
            <Text style={[ColorStyles.textColor, ColorStyles.Link]}>
              Create One
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
