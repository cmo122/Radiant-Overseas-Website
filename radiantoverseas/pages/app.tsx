import React from "react";
import Header from "@/app/components/Header";
import { HeroImageRight } from "@/app/components/Hero";
import MainFeaturesCard from "@/app/components/MainFeaturesCard";
import DetailedCardsSection from "@/app/components/DetailedCardsSection";
import { GetInTouch } from "@/app/components/GetInTouch";
import Footer from "@/app/components/Footer";
import '@mantine/core/styles.css';

type FeatureData = {
    icon: React.ReactNode;
    title: string;
    description: string;
  };

const features:FeatureData[]=[]

export default function App() {

    return (
        <>
            <Header/>
            <HeroImageRight/>
            <MainFeaturesCard/>
            <DetailedCardsSection/>
            <GetInTouch/>
            <Footer/>
        </>
    )
}