import React, { useState } from "react";
import Search from "./Search";
import Toast from "./UI/Toast";
import DefaultLayout from "./Layouts";
import { useApiContext } from "../contexts/ApiContext";

const Home = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const { getRepos } = useApiContext()

    const [searchText, setSearchText] = useState('')
    const handleOnChangeSearchText = newSearchText => setSearchText(newSearchText)

    const handleOnSubmit = () => {
        (async () => {
            try {
                const data = await getRepos(searchText)
                if (!(data.data === undefined || data.data.length == 0)) {
                    return navigation.navigate('Repositories', { data: data.data })
                }
                throw new Error('Something Went Wrong'
                )
            } catch (er) {
                console.log(error, "ERRA")
            }finally {
                setIsLoading(false)
                setSearchText('')
            }

        })()
        setIsLoading(true)
    }


    return (
        <DefaultLayout isLoading={isLoading}>
            <Search
                searchText={searchText}
                handleOnChangeSearchText={handleOnChangeSearchText}
                handleOnSubmit={handleOnSubmit}
            />
        </DefaultLayout>
    );
}

export default Home;

                // navigation.navigate('Repositories', {data: data.data})
