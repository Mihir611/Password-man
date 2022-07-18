import React, { useState } from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import ColorStyles from '../utils/ColorStyles';
import MainStyle from '../utils/Styles';
import Action from './action';

const Home = () => {
    const [action, setAction] = useState('')
    return(
        <SafeAreaView style={[MainStyle.container, ColorStyles.bodyBackground]}>
            <View style={MainStyle.homeHeaderText}>
                <Text style={ColorStyles.textColor}>Hi User</Text>
                <Text style={ColorStyles.textColor}>Select an option</Text>
            </View>
            <View style={MainStyle.listButtonView}>
                <TouchableOpacity style={MainStyle.listButtons} onPress={() => setAction('listPass')}>
                    <Text style={[ColorStyles.textColor, MainStyle.listButtonText]}>List all passwords</Text>
                </TouchableOpacity>
                <TouchableOpacity style={MainStyle.listButtons} onPress={() => setAction('newPass')}>
                    <Text style={[ColorStyles.textColor, MainStyle.listButtonText]}>Add a new Password</Text>
                </TouchableOpacity>
            </View>
            <View style={MainStyle.LoginImport}>
                <Action data={action}/>
            </View>
        </SafeAreaView>
    )
}

export default Home