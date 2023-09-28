import React from "react";
import { FeaturesCardTemplate } from "./FeaturesCardTemplate";
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import { cargoTrackingIconFeatures } from "./ROE_Services/Cargo_Tracking";
import CargoInsuranceCard from "./ROE_Services/Cargo_Insurance";


type FeatureData = {
    icon: any;
    title: string;
    description: string;
  };

  type FeaturesCardData={
    mainTitle:string,
    mainDescription:string,
    featuresArray:FeatureData[]
}

const cargoTrackingFeatures:FeaturesCardData={mainTitle:'CARGO TRACKING', mainDescription:'Lorem ipsum',featuresArray:cargoTrackingIconFeatures}
const cargoInsuranceFeatures:FeaturesCardData={mainTitle:'CARGO INSURANCE', mainDescription:'Lorem ipsum',featuresArray:cargoTrackingIconFeatures}

const allFeatures=[cargoTrackingFeatures, cargoInsuranceFeatures]

export default function DetailedCardsSection(){
    return(
        <>
            {allFeatures.map((features)=>(
                <FeaturesCardTemplate features={features}/>
            ))}
        </>
    )
}