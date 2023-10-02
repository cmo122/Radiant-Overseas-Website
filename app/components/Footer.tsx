import { Text, Container, Group } from '@mantine/core';
import {IconPackage} from '@tabler/icons-react'
import classes from '../css/FooterLinks.module.css';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Support', link: '#' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Our Services',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  }
];

export default function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
        <Group>
          <IconPackage size={40} />
          <h3 style={{
                    color: 'linear-gradient(to right, yellow, blue, orange)',
                    fontFamily: 'Futura, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                  }}>Radiant Overseas Express</h3>
        </Group>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
      </Container>
    </footer>
  );
}