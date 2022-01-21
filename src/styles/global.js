import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({

    container:{
        flex:1
    },
    content:{
        flex:1,
        marginHorizontal:'2.5%',
    },
    btn:{
        backgroundColor:'#FFDA00',
      borderColor: "#CA8A04",
      borderWidth: 1,
      borderRadius: 4,
      borderRadius:100
    },
    btnText:{
        textTransform:'uppercase',
        fontWeight:'bold',
    },
    title:{
        textAlign: 'center',
        marginTop:40,
        marginBottom: 20,
        fontSize:30
    },
    amount:{
        fontWeight:'700',
        fontSize:24,
        marginVertical:20
    }
})

export default globalStyles;