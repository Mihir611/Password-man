import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import ColorStyles from '../utils/ColorStyles';
import MainStyle from '../utils/Styles';
// first the password must be MD5 decrypted and then SHA1 decrypted

const ListData = () => {
    return(
        <SafeAreaView style={MainStyle.container}>
            <View style={MainStyle.flatListStyles}>
                <Text>Hi</Text>
            </View>
        </SafeAreaView>
    )
}

const NewData = () => {

}

const DefaultData = () => {

}

const Action = (props) => {
    if(props.data === 'listPass'){
        return(
            <ListData />
        )
    } else if(props.data === 'newPass') {
        return(
            <NewData />
        )
    } else {
        return(
            <DefaultData />
        )
    }
}

export default Action 