import React from 'react'
import { SponsorsCard } from './SponsorsCard'
import maerskLogo from '../assets/logos/maersk.png'
import { Text } from '@mantine/core'

const maerskDetails={name:"Maersk",logo:maerskLogo,link:"/"}

export default function SponsorsSection(){
    return(
        <div>
            <Text ta="center" fz="36px" fw="900">Trusted by world renowned carriers for over a decade        </Text>
            <SponsorsCard details={maerskDetails}/>
        </div>
    )
}