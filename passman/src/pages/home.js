import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import ColorStyles from '../utils/ColorStyles';
import MainStyle from '../utils/Styles';

const Home = () => {
    <SafeAreaView style={[MainStyle.container, ColorStyles.bodyBackground]}>
        <View>
            <Text>Hi User</Text>
            <Text>Select an option</Text>
        </View>
        <View>
            <TouchableOpacity>
                <Text>List all passwords</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Add a new Password</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
}

export default Home