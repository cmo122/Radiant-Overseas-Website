import { useState } from 'react';
import { Container, useMantineColorScheme, Button, Group, Burger, Image, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ROELOGO from '../assets/logos/ROELINELOGO.png'
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import classes from '../css/HeaderSimple.module.css';

const links = [
  { link: '/carriers', label: 'Our Carriers' },
  { link: '/about', label: 'Our Expertise' },
  { link: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
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

        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="lg" />
      </Container>
    </header>
  );
}