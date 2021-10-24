import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ImageColors from 'react-native-image-colors'

import DefaultLayout from './Layouts';
const Repos = ({ route }) => {
    // States
    const [colorFromImage, setColorFromImage] = useState('')

    const { data } = route.params;
    const { login: username, avatar_url } = data[0].owner
    const getColorFromImage = async () => {
        const { vibrant } = await ImageColors.getColors(avatar_url, {
            fallback: '#0af'
        })
        setColorFromImage(vibrant)
    }
    useEffect(() => {
        getColorFromImage()
    }, [])
    console.log(data)
    return (
        <DefaultLayout>
            {data.length ?
                <View style={styles.userSection}>
                    <Text style={[styles.username, { color: colorFromImage, borderBottomColor: colorFromImage}]}>
                       @{username}</Text>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={{ uri: avatar_url }}
                            style={[styles.image, { borderColor: colorFromImage }]}
                        />
                    </View>
                </View>
                : null
            }
        </DefaultLayout>
    );
}

const styles = StyleSheet.create({
    userSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageWrapper: {
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 200,
        padding: 10,
        borderWidth: 3,

    },
    username: {
        fontFamily: 'Inconsolata',
        fontSize: 30,
        borderBottomWidth: 1,
        paddingBottom: 1,
        borderBottomColor: 'transparent',
        color: '#000'
    }
})
export default Repos;
