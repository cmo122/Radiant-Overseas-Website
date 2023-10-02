import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { MantineProvider } from "@mantine/core";

export default function Carriers(){
    return(
        <MantineProvider>
            <Header/>
            <Footer/>
        </MantineProvider>
    )
}