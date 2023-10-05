import React from "react";
import App from "./app";
import { MantineProvider} from '@mantine/core';
import '@mantine/carousel/styles.css';

export default function Index(){

    return(
        <MantineProvider defaultColorScheme="auto">
            <App/>
        </MantineProvider>
    )
}
