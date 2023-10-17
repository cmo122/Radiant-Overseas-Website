import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from '../css/ContactIcons.module.css';
import { ReactNode } from 'react';
import React from 'react';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode | string;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title} role="contactTitle">
          {title}
        </Text>
        <Text size="sm" className={classes.description} role="contactDescription">{description}</Text>
      </div>
    </div>
  );
}

function extractTextFromReactNode(node:ReactNode) {
  let text = '';

  React.Children.forEach(node, child => {
    if (typeof child === 'string') {
      text += child;
    } else if (React.isValidElement(child) && child.props.children) {
      text += extractTextFromReactNode(child.props.children);
    }
  });

  return text;
}

function ContactIconMultiline({ icon: Icon, title, description, ...others }: ContactIconProps) {

  const stringValue=extractTextFromReactNode(description)
  const splitValues=stringValue.split(/,\s*/)

  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title} role="contactTitle">
          {title}
        </Text>
        <div>
          <Text className={classes.description} role="contactDescription">
            {splitValues.map((value:string, index)=>(
              <Text size="sm" key={index}>{value}</Text>
            ))}
            </Text>
        </div>
      </div>
    </div>
  );
}


const info = [
  { title: 'Email', description: 'import@roeline.net', icon: IconAt },
  { title: 'Phone', description: '909-468-1969', icon: IconPhone },
  { title: 'Address', description: '2705 S. Diamond Bar Blvd. #200, Diamond Bar CA 91765', icon: IconMapPin },
  { title: 'Working hours', description: '8:30 a.m. - 12 p.m., 1:00 p.m. - 5 p.m.', icon: IconSun },
];

export function ContactIconsList() {
  const items = info.map((item, index) =>{
  if(item.title==="Email" || item.title==="Phone") { 
    return <ContactIcon key={index} role="contactIcon" {...item} />
  }
  else{
    return <ContactIconMultiline key={index} role="contactIcon" {...item} />
  }
});

  return <Stack>{items}</Stack>;
}