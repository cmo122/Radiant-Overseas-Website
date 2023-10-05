import { Container, Title, Text, Button, Group, MantineProvider } from '@mantine/core';
import { Illustration } from '../app/assets/logos/ErrorIllustration';
import classes from '../app/css/NothingFoundBackground.module.css';

export default function NothingFoundBackground() {

  return (
      <MantineProvider>
        <Container className={classes.root}>
          <div className={classes.inner}>
            <Illustration className={classes.image} />
            <div className={classes.content}>
              <Title className={classes.title}>Nothing to see here</Title>
              <Text c="dimmed" size="lg" ta="center" className={classes.description}>
                Page you are trying to open does not exist. You may have mistyped the address, or the
                page has been moved to another URL. If you think this is an error contact support.
              </Text>
              <Group justify="center">
                <Button size="md">Take me back to home page</Button>
              </Group>
            </div>
          </div>
        </Container>
      </MantineProvider>
  );
}