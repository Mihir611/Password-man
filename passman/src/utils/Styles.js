import { StyleSheet } from "react-native";

const MainStyle = StyleSheet.create({
    container:{
        flex:1
    },
    //#region RegistrationStyles
    registerHeadingView:{
        flex:0.1,
        margin:'5%'
    },
    registerHeadingText:{
        textAlign:'center',
        fontSize:18
    },
    registerBodyView:{
        flex:0.7,
        margin:'4%'
    },
    registerRowView:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:'1%'
    },  
    registerTb:{
        borderWidth:1,
        borderColor:'#51087E',
        backgroundColor:'#101010',
        borderRadius:15
    },
    registerTbView:{
        width:'66%',
        paddingLeft:'3%'
    },
    registerTbText:{
        marginTop:'6%'
    },
    registerMidBodyView:{
        flex:0.1,
    },
    registerButton:{
        borderWidth:1,
        borderColor:'#51087E',
        alignSelf:'center',
        width:'70%'
    },
    registerButtonText:{
        padding:'2%',
        textAlign:'center'
    },
    registerFooterView:{
        flex:0.1,
        margin:'5%',
    },
    registerfooterText:{
        textAlign:'center',
        fontSize:12,
        textDecorationLine:'underline'
    }
    //#endregion RegistrationStyles
})

export default MainStyle