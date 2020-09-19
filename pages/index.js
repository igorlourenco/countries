import React from "react";
import Country from "../components/Country";
import {Grid} from "@chakra-ui/core"
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Home({countries}) {
    return (
        <>
            <Header/>
            <Grid
                justifyItems="Center"
                templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(6, 1fr)"]}
                gap={[2, 2, 3, 3]}
                p={[2, 2, 3, 3]}>

                {countries.map( (country, index) =>
                <motion.div
                    whileTap={{scale: 0.9, transition: {duration: 0.2}}}
                >
                    <Country country={country} index={index}/>
                </motion.div>
                )}

            </Grid>
            </>
    )
}

Home.getInitialProps = async (context) => {
    const response = await fetch( 'https://restcountries.eu/rest/v2/all' )
    const countries = await response.json()
    return {
        countries
    }
}