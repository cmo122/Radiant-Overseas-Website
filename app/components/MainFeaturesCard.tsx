import {
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
    MantineProvider
  } from '@mantine/core';
  import {  IconWorld, IconCurrentLocation, IconBulb } from '@tabler/icons-react';
  import classes from '../css/MainFeaturesCard.module.css';
  
  
  const data = [
    {
      title: 'Global Reach, Local Expertise',
      description:
        'With our extensive network of partners and local experts worldwide, we offer seamless international freight solutions. No matter where your cargo needs to go, we have the local knowledge and global reach to get it there efficiently.',
      icon: IconWorld,
    },
    {
      title: 'Transparent Tracking and Tracing',
      description:
        'Stay in control of your shipments with our real-time cargo tracking and tracing. We monitor your goods every step of the way, providing peace of mind and transparency.',
      icon: IconCurrentLocation,
    },
    {
      title: 'Custom Solutions for Every Cargo',
      description:
        'Your cargo is unique, and so are our solutions. We tailor our services to meet your specific needs, whether its specialized handling, temperature-sensitive goods, or cost-effective consolidation. Your cargo, your way.',
      icon: IconBulb,
    },
  ];
  
  export default function MainFeaturesCard() {
    const theme = useMantineTheme();
    const features = data.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
          color={theme.colors.blue[6]}
        />
        <Text  fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <MantineProvider>
          <Container size="lg" py="xl">
            <Group justify="center">
            </Group>
            <Title order={2} className={classes.title} ta="center" mt="sm">
              Let us take care of your inventory
            </Title>
            <Text c="dimmed" className={classes.description} ta="center" mt="md">
              Lorem ipsum
            </Text>
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
              {features}
            </SimpleGrid>
          </Container>
      </MantineProvider>
    );
  }