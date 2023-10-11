import React from "react";
import { Grid, BackgroundImage, Paper, Title, Text, SimpleGrid } from "@mantine/core";
import { StaticImageData } from "next/image";
import { TablerIconsProps } from '@tabler/icons-react';
import classes from '../css/FeaturesCard.module.css';

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

export default function FeaturesCard({features, items}:{features:FeaturesCardData,items:JSX.Element[]}){
    
    return(
        <Grid gutter={80} className="featuresCard" miw="0">
          <Grid.Col span={{ base: 12, sm:12, md: 6, lg:6, xl:6 }}>
            <BackgroundImage p="sm" src={features.bgimage.src} radius="lg" mah="500rem" mih="0" h="25rem">
              <Paper p="md" m="md" 
                className={classes.container}
                >
                <Title className={classes.title} order={2} >
                  {features.mainTitle}
                </Title>
                <Text className={classes.description}>
                  {features.mainDescription}
                </Text>
              </Paper>
            </BackgroundImage>
          </Grid.Col>
        

        <Grid.Col span={{ base: 12, sm:12, md: 6, lg:6, xl:6 }} >
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>)
      }