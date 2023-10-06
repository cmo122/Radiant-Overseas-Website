import React from "react";
import App from "./app";
import { MantineProvider} from '@mantine/core';
import '@mantine/carousel/styles.css';
import Head from 'next/head';


export default function Index(){

    return(
        <MantineProvider defaultColorScheme="auto" >
            <Head>
            <title>ROE LINE</title>
            <meta name="description" content="ROE LINE landing page" />
            <meta name="viewport" content="width=1060px, maximum-scale=1.0" />
            </Head>
            <App/>
        </MantineProvider>
    )
}
