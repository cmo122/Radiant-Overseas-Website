import React from "react";
import { Flex,  Text} from "@mantine/core";
import { FeaturesCardTemplate } from "./FeaturesCardTemplate";
import { cargoTrackingIconFeatures, cargoTrackingDescription } from "./ROE_Services/Cargo_Tracking";
import cargoTrackingImage from '../assets/images/cargo-tracking.avif'
// ***
import { cargoInsuranceIconFeatures, cargoInsuranceDescription } from "./ROE_Services/Cargo_Insurance";
import cargoInsuranceImage from '../assets/images/cargo-insurance.jpg'
// ***
import { customsIconFeatures, customsDescription } from "./ROE_Services/Customs_Clearance";
import customsImage from '../assets/images/customs.avif'
// ***
import { transportRoutingIconFeatures, transportRoutingDescription } from "./ROE_Services/Transportation_Routing";
import transportRoutingImage from '../assets/images/trasportrouting.avif'
// ***
import { consolidationIconFeatures, consolidationDescription } from "./ROE_Services/Consolidation";
import consolidationImage from '../assets/images/consolidation.avif'
// ***
import { TablerIconsProps } from '@tabler/icons-react';
import { StaticImageData } from "next/image";


type FeatureData = {
    icon: (props: TablerIconsProps) => JSX.Element;
    title: string;
    description: string;
  };

  type FeaturesCardData={
    mainTitle:string,
    mainDescription:string,
    featuresArray:FeatureData[],
    reversed:boolean,
    bgimage:StaticImageData
}

const cargoTrackingFeatures:FeaturesCardData={mainTitle:'CARGO TRACKING', mainDescription:cargoTrackingDescription, featuresArray:cargoTrackingIconFeatures, reversed:false, bgimage:cargoTrackingImage}
const cargoInsuranceFeatures:FeaturesCardData={mainTitle:'CARGO INSURANCE', mainDescription:cargoInsuranceDescription,featuresArray:cargoInsuranceIconFeatures, reversed:false, bgimage:cargoInsuranceImage}
const customsClearanceFeatures:FeaturesCardData={mainTitle:'CUSTOMS CLEARANCE', mainDescription:customsDescription,featuresArray:customsIconFeatures, reversed:false, bgimage:customsImage}
const transportRoutingFeatures:FeaturesCardData={mainTitle:'TRANSPORT ROUTING', mainDescription:transportRoutingDescription,featuresArray:transportRoutingIconFeatures, reversed:false, bgimage:transportRoutingImage}
const consDeconsFeatures:FeaturesCardData={mainTitle:'CONSOL AND DECONSOL', mainDescription:consolidationDescription,featuresArray:consolidationIconFeatures, reversed:false, bgimage:consolidationImage}

const allFeatures=[cargoTrackingFeatures, cargoInsuranceFeatures, customsClearanceFeatures, transportRoutingFeatures, consDeconsFeatures]

export default function DetailedCardsSection(){
    return(
        <Flex id="expertiseSection" justify="center" align="center" direction="column" ta="center"
        role="expertise">
            <Text p="xl" fz="36px" fw="900">Our Expertise</Text>
            {allFeatures.map((features,index)=>(
                <div key={index} id={features.mainTitle} role="detailedCard">
                    <FeaturesCardTemplate features={{
                    ...features,
                    reversed: index % 2 === 0,
                    }}/>
                </div>
            ))}
        </Flex>
    )
}