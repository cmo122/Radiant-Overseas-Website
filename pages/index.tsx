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
            <title>R.O.E. LINE</title>
            <meta name="description" content="R.O.E. LINE Freight Forwarding" />
            <meta name="next-head-count" content="fill"/>
            <link rel="icon" href="/favicon.ico" />
            <html lang="en" />
            </Head>
            <App/>
        </MantineProvider>
    )
}
