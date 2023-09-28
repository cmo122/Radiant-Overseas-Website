import React from "react";
import Header from "@/app/components/Header";
import { MantineProvider } from "@mantine/core";

export default function Carriers(){
    return(
        <MantineProvider>
            <Header/>
        </MantineProvider>
    )
}