import React from 'react'
import { SponsorsCard } from './SponsorsCard'
import { Text, SimpleGrid, Paper } from '@mantine/core'
import { carrierDetailsList } from './Carriers List/carrierDetailsList'

export default function SponsorsSection(){
    return(
            <Paper mb="lg">
                <Text p="xl" ta="center" fz="36px" fw="900" td="underline">Trusted by world renowned carriers for over 10 years</Text>
                <SimpleGrid spacing="lg" ta="center" cols={6}>
                    {carrierDetailsList.map((details, index)=>(
                        <SponsorsCard details={details} key={index}/>
                    ))}
                </SimpleGrid>
            </Paper>
    )
}