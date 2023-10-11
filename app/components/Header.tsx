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

  const headerItems = links.map((link, index) => (
    <Button key={index} m="sm" className={classes.link}
    id={`${link.label} Button`}
    fw="900"
    variant="gradient"
    gradient={{ from: 'orange', to: 'yellow' }}
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
  
  const changeThemeButton= 
  <Button id="changeThemeButton" name="changeThemeButton" key="4" 
    onClick={() => {
    closeDrawer();
    toggleColorScheme()}
    }
    className={classes.link}
    m="sm"
    variant="gradient"
    gradient={{ from: 'orange', to: 'yellow', deg: 90 }}>
    <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
    <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
  </Button>

  const items=[...headerItems,changeThemeButton]

  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group>
          <Image src={ROELOGO.src} alt="ROE LINE logo" fit="contain" w="100" h="100"/>
        </Group>
        <Center  visibleFrom="sm">
          {items}
        </Center>

        <Burger opened={opened} onClick={toggleDrawer} hiddenFrom="sm" size="lg" />
        <Drawer opened={opened} onClose={closeDrawer } ta="center">
          <Flex direction="column" justify="center" align="center">
            {items}
          </Flex>
        </Drawer>
      </Container>
    </header>
  );
}