import React from "react";
import App from "./app";
import { MantineProvider} from '@mantine/core';
import '@mantine/carousel/styles.css';
import Head from 'next/head';
import '../app/css/global.css'

export default function Index(){

    return(
            <MantineProvider>
                <Head>
                <title>ROE LINE</title>
                <meta name="description" content="ROE LINE Freight Forwarding" />
                <meta name="viewport" content="width=device-width"/>
                </Head>
                <App/>
            </MantineProvider>
    )
}
