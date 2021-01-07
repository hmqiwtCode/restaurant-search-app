import React from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { Feather  } from "@expo/vector-icons";

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                style={styles.textInputStyle} 
                placeholder="Search"
                value={term}
                onChangeText={(newValue) => onTermChange(newValue)}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={() => onTermSubmit()}
                 />
        </View>
    );
}

//rnstyle
const styles = StyleSheet.create({
    background : {
        height:40,
        marginHorizontal:10,
        borderRadius: 5,
        backgroundColor:'#F0EEEE',
        flexDirection:'row',
        marginVertical:15
    },
    textInputStyle : {
        flex:1,
        fontSize:18
    },
    iconStyle: {
       alignSelf:'center',
       fontSize:30,
       marginHorizontal:10
    }
});

export default SearchBar;
