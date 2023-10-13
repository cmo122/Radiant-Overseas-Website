import { Container, Title, Text } from '@mantine/core';
import classes from '../css/HeroImageRight.module.css';
import { Button } from '@mantine/core';
import {Link} from 'react-scroll';
import LazyLoad from 'react-lazy-load';
import '../css/lazyload.css'

export function Hero() {

  return (
    <div className={classes.root} role="hero">
        <Container size="lg">
          <div className={classes.inner}>
            <div className={classes.content} data-testid='title'>
              <LazyLoad>
                <Title className={classes.title} >
                  Welcome to
                <Text
                    component="span"
                    inherit
                    variant="gradient"
                    gradient={{from:"orange",to:"yellow"}}
                  >
                  {' '}  R.O.E LINE{' '}
                  </Text>
                </Title>
              </LazyLoad>
              <Text className={classes.description} mt={30}>
                The preferred freight forwarder for over 10 years
              </Text>
              <Button
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                role="contactButton"
                size="xl"
                className={classes.control}
                mt={40}>
                <Link
                    activeClass="active"
                    to='contactForm'
                    spy={true}
                    smooth={true}
                    offset={30}
                  >
                    Contact Us
                  </Link>
              </Button>
            </div>
          </div>
        </Container>
    </div>
  );
}