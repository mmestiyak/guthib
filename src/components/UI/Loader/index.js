import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../../../themes';

const Loader = ({ loading }) => {
    return (
        <>
            {
                loading 

                ?
                    <View style={styles.loaderWrapper}>
                        <ActivityIndicator size="large" color={colors.forestGreen} />
                    </View >
                :
                    null}
        </>
    )
}

const styles = StyleSheet.create({
    loaderWrapper: {
        position: 'absolute',
        top: 0,
        left:0,
        right:0,
        bottom: 0,
        backgroundColor: '#fff',
        justifyContent:'center',
        

    }
})
export default Loader;