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
                <link rel="icon" href="/icon.ico" />
                <link rel="apple-touch-icon" sizes="16x16" href="/icon.ico" />
                <html lang="en" />
                </Head>
                <App/>
            </MantineProvider>
    )
}
