import {  Container, Group, Image, Text } from '@mantine/core';
import ROELogo from '../assets/logos/ROELINELOGO.png'
import classes from '../css/FooterLinks.module.css';
import {scroller} from 'react-scroll'

const data = [
  {
    title: 'Our Services',
    links: [
      { label: 'Cargo Tracking', link: 'CARGO TRACKING' },
      { label: 'Cargo Insurance', link: 'CARGO INSURANCE' },
      { label: 'Customs Clearance', link: 'CUSTOMS CLEARANCE' },
      { label: 'Transport Routing', link: 'TRANSPORT ROUTING' },
      { label: 'Consolidation and Deconsolidation', link: 'CONSOL/DECONSOL' },
    ],
  }
];

export default function Footer() {

  const scrollOptions={
    duration: 400, 
    smooth: true,
    spy: true,
  }

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={`#${link.label}`}
        onClick={() => {
          scroller.scrollTo(link.link, scrollOptions);
        }}
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
    <footer className={classes.footer} role="footer">
      <Container className={classes.inner}>
        <div className={classes.logo}>
        <Group>
          <Image src={ROELogo.src} alt="ROE LINE logo" />
        </Group>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
      </Container>
    </footer>
  );
}