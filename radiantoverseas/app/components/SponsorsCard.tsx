import { Paper, Image, Text } from '@mantine/core';
import classes from '../css/SponsorsCard.module.css';
import { StaticImageData } from 'next/image';

type prop={
    name:string,
    logo:StaticImageData,
    link: string
}

export function SponsorsCard({details}:{details:prop}) {
  return (
    <Paper  p="xl" radius="md" className={classes.card}>
      <Image
      radius="md"
      src={details.logo.src}
    />
    </Paper>
  );
}