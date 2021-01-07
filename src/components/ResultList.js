import React from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import ResultDetail from '../components/ResultDetail'
import { withNavigation } from "react-navigation";



const ResultList = ({title,results,navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() =>navigation.navigate('ResultsShow',{id : item.id})}>
                            <ResultDetail result={item}/>
                        </TouchableOpacity>
                        
                    );
                }} />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:7
    },
    container : {
        marginBottom : 10
    }

});

export default withNavigation(ResultList);