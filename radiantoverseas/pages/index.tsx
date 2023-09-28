import React, {useState} from "react";
import App from "./app";
import { MantineProvider} from '@mantine/core';

export default function Index(){

    return(
        <MantineProvider defaultColorScheme="auto">
            <App/>
        </MantineProvider>
    )
}