import React from "react";
import { MantineProvider, Text} from '@mantine/core';
import Header from "@/app/components/Header";
import { HeroImageRight } from "@/app/components/Hero";
import MainFeaturesCard from "@/app/components/MainFeaturesCard";
import SponsorsSection from "@/app/components/SponsorsSection";
import DetailedCardsSection from "@/app/components/DetailedCardsSection";
import { GetInTouch } from "@/app/components/GetInTouch";
import Footer from "@/app/components/Footer";
import '@mantine/core/styles.css';

export default function App() {

    return (
            <MantineProvider>
                <Header/>
                <HeroImageRight/>
                <MainFeaturesCard/>
                <SponsorsSection/>
                <Text p="xl" ta="center" td="underline" fz="36px" fw="900">Our Expertise</Text>
                <DetailedCardsSection/>
                <GetInTouch/>
                <Footer/>
            </MantineProvider>
    )
}

