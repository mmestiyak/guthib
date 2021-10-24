import React from 'react';
import { Text, View, StyleSheet, TextInput, Dimensions } from "react-native";
import { colors } from '../themes';

const Search = (props) => {
    const {
        searchText,
        handleOnChangeSearchText,
        handleOnSubmit
    } = props
    return (
        <View style={styles.searchContainer}>
            <TextInput value={searchText} onChangeText={handleOnChangeSearchText} onSubmitEditing={handleOnSubmit} placeholderTextColor={colors.forestGreen} placeholder="Enter GitHub Username" style={styles.input} />
        </View>
    );
}

export default Search;

const styles = StyleSheet.create({
    searchContainer: {
        height: Dimensions.get('window').height - 80,
        width: Dimensions.get('window').width - 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: colors.storm,
        color: colors.forestGreen,
        width: 300,
        borderRadius: 5,
        padding: 10,

    }
})