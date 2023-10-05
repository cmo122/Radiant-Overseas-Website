import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from '../css/ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'import@roeline.net', icon: IconAt },
  { title: 'Phone', description: '909-468-1969', icon: IconPhone },
  { title: 'Address', description: '2705 S. Diamond Bar Blvd. #200, Diamond Bar, CA, 91765', icon: IconMapPin },
  { title: 'Working hours', description: '8 a.m. – 5 p.m.', icon: IconSun },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}