import React from "react";
import App from "./app";
import { MantineProvider} from '@mantine/core';
import '@mantine/carousel/styles.css';
import Head from 'next/head';
import '../app/css/global.css'

export default function Index(){

    return(
            <MantineProvider defaultColorScheme="auto">
                <Head>
                <title>ROE LINE</title>
                <meta name="description" content="ROE LINE Freight Forwarding" />
                </Head>
                <App/>
            </MantineProvider>
    )
}
