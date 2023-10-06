import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from '../css/GetInTouch.module.css';
import { useForm, SubmitHandler } from "react-hook-form"

interface FormFields {
  name: string
  email: string
  subject: string
  message: string
}

export function GetInTouch() {

  const {
    register,
    handleSubmit,
    formState: {  },
  } = useForm<FormFields>()

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    fetch('https://formspree.io/f/xeqbpdrj', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Sent: ", data)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <Paper shadow="md" radius="lg" id="contactForm">
      <div className={classes.wrapper}>
        <div className={classes.contacts} style={{ background: 'linear-gradient(to bottom, #FF8C00, #002855)' }}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Text fz="xl" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput  label="Your name" placeholder="Your name" {...register("name", {pattern: /^[A-Za-z\-']{2,30}$/})}/>
              <TextInput  label="Your email" placeholder="johndoe@gmail.com" type='email'  {...register("email")} required />
            </SimpleGrid>

            <TextInput  mt="md" label="Subject" placeholder="Subject" {...register("subject")} required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
              {...register("message")}
              required
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}