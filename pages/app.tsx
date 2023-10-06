import React from "react";
import Header from "@/app/components/Header";
import { HeroImageRight } from "@/app/components/Hero";
import MainFeaturesCard from "@/app/components/MainFeaturesCard";
import CarriersSection from "@/app/components/CarriersSection";
import DetailedCardsSection from "@/app/components/DetailedCardsSection";
import { GetInTouch } from "@/app/components/GetInTouch";
import Footer from "@/app/components/Footer";
import '@mantine/core/styles.css';

export default function App() {

    return (
            <>
                <Header/>
                <HeroImageRight/>
                <MainFeaturesCard/>
                <CarriersSection/>
                <DetailedCardsSection/>
                <GetInTouch/>
                <Footer/>
            </>
    )
}

