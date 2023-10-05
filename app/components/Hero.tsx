import { Container, Title, Text } from '@mantine/core';
import classes from '../css/HeroImageRight.module.css';

export function HeroImageRight() {

  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Welcome to
            <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{from:"yellow",to:"blue"}}
              >
              {' '}  R.O.E. LINE{' '}
              </Text>
            </Title>

            <Text className={classes.description} mt={30}>
              The preferred freight forwarder for over 10 years
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
}