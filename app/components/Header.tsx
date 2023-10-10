import { Text, Container, useMantineColorScheme, Button, Group, Burger, Image, Center, Drawer, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ROELOGO from '../assets/logos/ROELINELOGO.png'
import { IconSun, IconMoon } from '@tabler/icons-react';
import { scroller } from 'react-scroll';
import cx from 'clsx';
import classes from '../css/HeaderSimple.module.css';

const links = [
  { link: 'carriersSection', label: 'Our Carriers' },
  { link: 'expertiseSection', label: 'Our Expertise' },
  { link: 'contactForm', label: 'Contact Us' },
];

export default function Header() {
  const [opened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const scrollOptions={
    duration: 400, 
    smooth: true,
    spy: true,
  }

  const items = links.map((link, index) => (
    <Button key={index} m="sm" className={classes.link}
    onClick={() => {
      closeDrawer();
      const elementId = link.link; 
      scroller.scrollTo(elementId, scrollOptions);
      
    }}>
        <Text>
          {link.label}
        </Text>
    </Button>
  ));
    
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group>
          <Image src={ROELOGO.src} alt="ROE LINE logo" fit="contain" w="100" h="100"/>
        </Group>
        <Center  visibleFrom="sm">
          {items}
          <Button onClick={() => toggleColorScheme()} className={classes.link}>
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
          </Button>
        </Center>

        <Burger opened={opened} onClick={toggleDrawer} hiddenFrom="sm" size="lg" />
        <Drawer opened={opened} onClose={closeDrawer } ta="center">
          <Flex direction="column" justify="center" align="center">
            {items}
            <Button className={classes.link} m="sm" onClick={() => toggleColorScheme()}>
              <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
              <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
            </Button>
          </Flex>
        </Drawer>
      </Container>
    </header>
  );
}