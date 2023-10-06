import { Container, useMantineColorScheme, Button, Group, Burger, Image, Center, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ROELOGO from '../assets/logos/ROELINELOGO.png'
import { IconSun, IconMoon } from '@tabler/icons-react';
import { Link } from 'react-scroll';
import cx from 'clsx';
import classes from '../css/HeaderSimple.module.css';

const links = [
  { link: 'carriersSection', label: 'Our Carriers' },
  { link: 'expertiseSection', label: 'Our Expertise' },
  { link: 'contactForm', label: 'Contact Us' },
];

export default function Header() {
  const [opened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const items = links.map((link, index) => (
    <Button key={index} m="sm" onClick={closeDrawer}>
      <Link
          activeClass="active"
          to={link.link}
          spy={true}
          smooth={true}
          offset={-30}
        >
          {link.label}
        </Link>
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
          <Button onClick={() => toggleColorScheme()}>
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
          </Button>
        </Center>

        <Burger opened={opened} onClick={toggleDrawer} hiddenFrom="sm" size="lg" />
        <Drawer opened={opened} onClose={closeDrawer }>
          {items}
        </Drawer>
      </Container>
    </header>
  );
}