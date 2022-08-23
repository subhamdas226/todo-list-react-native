import React from 'react'
import { SafeAreaView, View, TextInput, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native'
import BlogContext from './DataHouse'
import { readData } from './asyn-storage/LoginSession';

const AddScreen = ({ navigation }) => {
    const [title, setTitle] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [author, setAuthor] = React.useState('')
    React.useEffect(() => {
        readData('name').then(x => setAuthor(x));
        navigation.setOptions({
            title: '',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#1180C5'
            },
        })
    }, [author])

    const { addBlog } = React.useContext(BlogContext)
    const submitHandler = () => {
        if (title && desc) {
            addBlog({ title, desc, author: author })
            setTitle('')
            setDesc('')
            navigation.goBack()
        }
        else {
            alert("Fill all feilds")
        }
    }

    return (
        <SafeAreaView>
            <StatusBar translucent />
            <View style={styles.headerStyle}>
            </View>
            <View style={styles.container}>

                <View style={styles.inputBoxStyle}>
                    <TextInput style={styles.titleStyle} placeholder={"Title that relate your Post"} value={title} onChangeText={(t) => setTitle(t.trimStart())} />
                </View>
                <View style={styles.inputBoxStyle}>
                    <TextInput style={styles.titleStyle} placeholder={"Description that make sense for your title"} value={desc} onChangeText={(t) => setDesc(t.trimStart())} />
                </View>
                <TouchableOpacity onPress={() => {
                    submitHandler()
                }}>
                    <View style={styles.btnGrpStyle}>
                        <Text style={styles.btnStyle}>Submit</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,

    },
    inputBoxStyle: {
        marginVertical: 5
    },
    // headerStyle: {
    //     height: 30,
    //     backgroundColor: 'black',
    //     marginBottom: 10
    // },
    titleStyle: {
        borderColor: 'grey',
        borderWidth: 1,
        paddingHorizontal: 15
    },

    btnGrpStyle: {
        flexDirection: 'row',
        width: "100%",
        height: 40,
        backgroundColor: '#1180C5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    btnStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
    }

})

export default AddScreen