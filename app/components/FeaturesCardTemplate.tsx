import { Text, ThemeIcon,  rem } from '@mantine/core';
import classes from '../css/FeaturesTitle.module.css';
import { TablerIconsProps } from '@tabler/icons-react';
import { StaticImageData } from 'next/image';
import FeaturesCard from './FeaturesCard';

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

export function FeaturesCardTemplate({ features }: { features: FeaturesCardData }) {
  const items = features.featuresArray.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'turquoise' }}
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper} >
      <FeaturesCard features={features} items={items}/>
    </div>
  );
}