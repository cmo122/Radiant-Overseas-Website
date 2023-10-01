import { Title, SimpleGrid, Text, ThemeIcon, Grid, rem } from '@mantine/core';
import classes from '../css/FeaturesTitle.module.css';
import { BackgroundImage, Paper } from '@mantine/core';
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

      {features.reversed && (
        <Grid gutter={80} >
          <Grid.Col span={{ base: 12, md: 7 }}>
          
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
          
          </Grid.Col>

        
          <Grid.Col span={{ base: 12, md: 5 }}>
            <BackgroundImage src={features.bgimage.src} radius="lg" w="700px" h="400px" p="lg">
                <Paper p="md" style={{ background: 'rgba(255, 255, 255, 0.65)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.18)'}}>
                  <Title className={classes.title} order={2}>
                    {features.mainTitle}
                  </Title>
                  <Text className={classes.description}>
                    {features.mainDescription}
                  </Text>
                </Paper>
            </BackgroundImage>
          </Grid.Col>
        
        
      </Grid>
      )}
      

      {!features.reversed &&(
      <Grid gutter={80}>

        
          <Grid.Col span={{ base: 12, md: 5 }}>
            <BackgroundImage src={features.bgimage.src} radius="lg" w="700px" h="400px" p="lg">
              <Paper p="md" style={{ background: 'rgba(255, 255, 255, 0.65)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.18)',}}>
                <Title className={classes.title} order={2} >
                  {features.mainTitle}
                </Title>
                <Text className={classes.description}>
                  {features.mainDescription}
                </Text>
              </Paper>
            </BackgroundImage>
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