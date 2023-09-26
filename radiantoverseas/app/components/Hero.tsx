import { Container, Title, Text, Button } from '@mantine/core';
import classes from '../css/HeroImageRight.module.css';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              The{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                preferred choice
              </Text>{' '}
              for freight forwarding
            </Title>

            <Text className={classes.description} mt={30}>
              Lorem ipsum
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Our Carriers
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}