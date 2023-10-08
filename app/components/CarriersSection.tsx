import React, {useRef} from 'react'
import { CarrierCard } from './CarrierCard';
import { Text, SimpleGrid, Image,  Group } from '@mantine/core'
import { carrierDetailsList } from './Carriers List/carrierDetailsList'
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import classes from '../css/SponsorsCarousel.module.css'

export default function CarriersSection(){

    const mobileSlides=carrierDetailsList.map((details)=>(
        <Carousel.Slide  key={details.name} >
            <Image src={details.logo.src} alt={details.name} ml="md" mr="md" maw="80%" mah="80%"/>
        </Carousel.Slide>
    ))

    const autoplay = useRef(Autoplay({ delay: 2000 }));

    return(
            <Group m="sm" styles={{root:{display:"flex", flexDirection:"column"}}} id="carriersSection">
                <Text  ta="center" fz="36px" fw="900">Trusted by the largest international carriers</Text>
                <SimpleGrid spacing="lg" ta="center" cols={6} visibleFrom='md'>
                    {carrierDetailsList.map((details, index)=>(
                        <CarrierCard  details={details} key={index}/>
                    ))}
                </SimpleGrid>
                <Carousel hiddenFrom='md'
                loop
                classNames={classes}
                plugins={[autoplay.current]}
                slideSize={{ base:"100%", sm: '50%', md:"33.333333%" }}
                >
                    {mobileSlides}               
                </Carousel>
            </Group>
    )
}