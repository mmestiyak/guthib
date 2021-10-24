import axios from 'axios';
import React, { createContext, useContext } from 'react';

const ApiContext = createContext()

export const useApiContext = () => useContext(ApiContext)

const api = axios.create({
    baseURL: 'https://api.github.com/',
})



const ApiContextProvider = ({ children }) => {

    const getRepos = async username => {
        try {
            const data = await api.get(`users/${username}/repos`)
            return data;
        } catch (error) {
            Toast('Something went wrong, enter valid username')
            alert('went wrong')

        }

    }

    const contextData = {
        getRepos,
        // color:'red'
    }
    return (
        <ApiContext.Provider value={contextData}>
            {children}
        </ApiContext.Provider>
    );
}

export default ApiContextProvider;