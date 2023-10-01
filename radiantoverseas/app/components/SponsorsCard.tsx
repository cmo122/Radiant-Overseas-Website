import { Image, Text } from '@mantine/core';
import classes from '../css/SponsorsCard.module.css';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IconExternalLink } from '@tabler/icons-react';

type prop={
    name:string,
    logo:StaticImageData,
    link: string
}

export function SponsorsCard({details}:{details:prop}) {

  const [hoverState,setHoverState]=useState(false)

  return (
    
    <Link href={details.link} className={classes.card} onMouseOver={()=>setHoverState(true)} onMouseOut={()=>setHoverState(false)}>
        <Image
            src={details.logo.src}
            h="140px"
            w="140px"
            className={classes.logo}/>
        {hoverState && <IconExternalLink className={classes.redirectIcon} >Redirecting to tracker link</IconExternalLink>}
    </Link>
    
  );
}