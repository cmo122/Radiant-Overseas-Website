import { useState } from 'react';
import { Container, useMantineColorScheme, Button, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {IconPackage} from '@tabler/icons-react'
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import classes from '../css/HeaderSimple.module.css';

const links = [
  { link: '/about', label: 'About Us' },
  { link: '/carriers', label: 'Our Carriers' },
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
          <IconPackage size={40} />
          <h3 style={{
                    color: 'linear-gradient(to right, yellow, blue, orange)',
                    fontFamily: 'Futura, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                  }}>Radiant Overseas Express</h3>
        </Group>
        <Group gap={5} visibleFrom="xs">
          {items}
          <Button onClick={() => toggleColorScheme()}>
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
          </Button>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}