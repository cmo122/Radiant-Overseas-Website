import { Title, SimpleGrid, Text, ThemeIcon, Grid, rem } from '@mantine/core';
import classes from '../css/FeaturesTitle.module.css';
import { BackgroundImage } from '@mantine/core';
import { TablerIconsProps } from '@tabler/icons-react';
import { StaticImageData } from 'next/image';

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
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
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
      {features.reversed && (
        <Grid gutter={80} >
          <Grid.Col span={{ base: 12, md: 7 }}>
          
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
          
          </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
            {features.mainTitle}
          </Title>
          <Text c="dimmed">
            {features.mainDescription}
          </Text>
        </Grid.Col>
        
      </Grid>
      )}
      

      {!features.reversed &&(
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 } }
        >
          <Title className={classes.title} order={2} >
            {features.mainTitle}
          </Title>
          <Text c="dimmed">
            {features.mainDescription}
          </Text>
        
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>)}
    </div>
  );
}