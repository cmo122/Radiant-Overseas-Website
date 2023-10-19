import { Image } from '@mantine/core';
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

export function CarrierCard({details}:{details:prop}) {

  const [hoverState,setHoverState]=useState(false)

  return (
    
    <Link style={{minWidth:"175px"}} href={details.link} className={classes.card} onMouseOver={()=>setHoverState(true)} onMouseOut={()=>setHoverState(false)}>
        <Image
            src={details.logo.src}
            alt={details.name}
            h="140px"
            style={{ maxWidth: "220px"}}
            className={classes.logo}/>
        {hoverState && <IconExternalLink className={classes.redirectIcon} />}
    </Link>
    
  );
}