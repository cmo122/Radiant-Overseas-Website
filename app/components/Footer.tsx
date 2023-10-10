import {  Container, Group, Image } from '@mantine/core';
import ROELogo from '../assets/logos/ROELINELOGO.png'
import classes from '../css/FooterLinks.module.css';

// const data = [
//   {
//     title: 'About',
//     links: [
//       { label: 'Features', link: '#' },
//       { label: 'Pricing', link: '#' },
//       { label: 'Support', link: '#' },
//       { label: 'Forums', link: '#' },
//     ],
//   }
// ];

export default function Footer() {
  // const groups = data.map((group) => {
  //   const links = group.links.map((link, index) => (
  //     <Text<'a'>
  //       key={index}
  //       className={classes.link}
  //       component="a"
  //       href={link.link}
  //       onClick={(event) => event.preventDefault()}
  //     >
  //       {link.label}
  //     </Text>
  //   ));

  //   return (
  //     <div className={classes.wrapper} key={group.title}>
  //       <Text className={classes.title}>{group.title}</Text>
  //       {links}
  //     </div>
  //   );
  // });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
        <Group>
          <Image src={ROELogo.src} alt="ROE LINE logo" />
        </Group>
        </div>
        {/* <div className={classes.groups}>{groups}</div> */}
      </Container>
      <Container className={classes.afterFooter}>
      </Container>
    </footer>
  );
}