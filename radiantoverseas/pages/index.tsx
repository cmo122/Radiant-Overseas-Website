import React from "react";
import Header from "@/app/components/Header";
import { HeroImageRight } from "@/app/components/Hero";
import FeaturesCards from "@/app/components/FeaturesCards";
import  CargoTrackingCard  from "@/app/components/ROE_Services/Cargo_Tracking";
import  CustomsClearanceCard  from "@/app/components/ROE_Services/Customs_Clearance";
import  CargoInsuranceCard  from "@/app/components/ROE_Services/Cargo_Insurance";
import  TransportationRoutingCard  from "@/app/components/ROE_Services/Transportation_Routing";
import  ConsolidationCard  from "@/app/components/ROE_Services/Consolidation";
import Footer from "@/app/components/Footer";
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';

export default function Index() {
    return (
        <MantineProvider>
            <Header/>
            <HeroImageRight/>
            <FeaturesCards/>
            <CargoTrackingCard/>
            <CustomsClearanceCard/>
            <CargoInsuranceCard/>
            <TransportationRoutingCard/>
            <ConsolidationCard/>
            <Footer/>
        </MantineProvider>
    )
}