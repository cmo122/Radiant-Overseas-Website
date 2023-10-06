import React, {useRef} from 'react'
import { SponsorsCard } from './SponsorsCard'
import { Text, SimpleGrid, Image,  Group } from '@mantine/core'
import { carrierDetailsList } from './Carriers List/carrierDetailsList'
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import classes from '../css/SponsorsCarousel.module.css'

export default function SponsorsSection(){

    const mobileSlides=carrierDetailsList.map((details)=>(
        <Carousel.Slide  key={details.name} >
            <Image src={details.logo.src} alt={details.name} ml="md" mr="md" maw="80%" mah="80%"/>
        </Carousel.Slide>
    ))

    const autoplay = useRef(Autoplay({ delay: 2000 }));

    return(
            <Group mb="lg" styles={{root:{display:"flex", flexDirection:"column"}}}>
                <Text p="xl" ta="center" fz="36px" fw="900">Trusted by the largest international carriers</Text>
                <SimpleGrid spacing="lg" ta="center" cols={6} visibleFrom='lg'>
                    {carrierDetailsList.map((details, index)=>(
                        <SponsorsCard details={details} key={index}/>
                    ))}
                </SimpleGrid>
                <Carousel withIndicators hiddenFrom='lg'
                slideGap="md" 
                loop
                classNames={classes}
                maw="95%"
                plugins={[autoplay.current]}>
                    {mobileSlides}               
                </Carousel>
            </Group>
    )
}
