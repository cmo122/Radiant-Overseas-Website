import React from 'react'
import { SponsorsCard } from './SponsorsCard'
import { Text, SimpleGrid, Image, Center } from '@mantine/core'
import { carrierDetailsList } from './Carriers List/carrierDetailsList'
import { Carousel } from '@mantine/carousel';
import '../css/SponsorsCarousel.module.css'

export default function SponsorsSection(){

    const mobileSlides=carrierDetailsList.map((details)=>(
        <Carousel.Slide  key={details.name} style={{justifyContent:"center", alignItems:"center"}}>
            <Image src={details.logo.src} alt={details.name} w="350" h="220"/>
        </Carousel.Slide>
    ))


    return(
            <Center mb="lg" styles={{root:{display:"flex", flexDirection:"column"}}}>
                <Text p="xl" ta="center" fz="36px" fw="900">Trusted by the largest international carriers</Text>
                <SimpleGrid spacing="lg" ta="center" cols={6} visibleFrom='lg'>
                    {carrierDetailsList.map((details, index)=>(
                        <SponsorsCard details={details} key={index}/>
                    ))}
                </SimpleGrid>
                <Carousel withIndicators hiddenFrom='lg' w="500" h="250" ta="center" display={"flex"}>
                    {mobileSlides}               
                </Carousel>
            </Center>
    )
}
