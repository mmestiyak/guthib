import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Loader from '../UI/Loader';
const DefaultLayout = (props) => {
    const {
        children,
        isLoading
    } = props;
    return (
        <>
            <Loader loading={isLoading} />
            <ScrollView contentContainerStyle={styles.container}>
                {children}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 40,
    }
})

export default DefaultLayout;