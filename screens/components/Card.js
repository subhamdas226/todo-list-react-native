import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;

const Card = ({ info, navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Show', { blogID: info.id })}>
                <View style={styles.cardStyles}>
                    <Text style={styles.titleStyle}>{info.title} ...</Text>
                    <View style={styles.metaDataBoxStyle}>
                        <View style={styles.bulletStyle}></View>
                        <Text style={styles.daysStyle}> {info.date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyles: {
        width: windowWidth - 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 9,
        borderRadius: 10
    },
    titleStyle: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    metaDataBoxStyle: {
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bulletStyle: {
        backgroundColor: "#1180C5",
        width: 8,
        height: 8,
        marginRight: 5,
        borderRadius: 10
    },
    daysStyle: {
        fontStyle: 'italic'
    },
})
export default Card
