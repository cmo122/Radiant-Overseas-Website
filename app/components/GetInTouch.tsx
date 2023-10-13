import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from '../css/GetInTouch.module.css';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useFormReactHookForm, SubmitHandler} from "react-hook-form"
import {z} from 'zod'
import axios from 'axios';

interface FormFields {
  name: string
  email: string
  subject: string
  message: string
}

const schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),

  email: z.string().email({ message: "Invalid email format" }),

  subject: z
    .string()
    .min(2, { message: "Subject must be at least 2 characters" })
    .max(50, { message: "Subject cannot exceed 50 characters" }),

  message: z
    .string()
    .min(12, { message: "Message must be at least 12 characters" })
    .max(300, { message: "Message cannot exceed 300 characters" }),
});

export default function GetInTouch() {

  const [success, setSuccess]=useState(false)
  const [failure, setFailure]=useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormReactHookForm<FormFields>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    reValidateMode:'onChange' 
});

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    
    const validation=schema.safeParse(data)

    if(validation.success){
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);
      try {
      axios.post('https://formspree.io/f/xeqbpdrj', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if(response.status===200){
          setSuccess(true)
        }
        else{
          console.log("Failed to send!");
          setFailure(true)
        }
      })
      .catch((error) => {
        console.error(error);
      });
      } catch(error) {
      console.error(error)
    } 
    
    } else {
        console.error(validation.error);
      }
  }

  return (
    <Paper shadow="md" radius="lg" id="contactForm" role="contact">
      <div className={classes.wrapper}>
        <div className={classes.contacts} style={{ background: 'linear-gradient(to bottom, #FF8C00, #002855)' }}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList />
        </div>

        {/* FORM ELEMENT */}
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Text fz="xl" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <div className={classes.inputContainer}>
                <TextInput  id="name" label="Your name" placeholder="Your name" {...register("name")}
                 />
                {errors.name && <span className={classes.errorMessage} role="alert" id="nameError">{errors.name?.message}</span>}
              </div>
              <div className={classes.inputContainer}>
                <TextInput  label="Your email" id="email" placeholder="johndoe@gmail.com" type='email'  {...register("email")} required />
                {errors?.email && <span className={classes.errorMessage} role="alert" id="emailError">{errors.email?.message}</span>}
              </div>
            </SimpleGrid>

            <div className={classes.inputContainer}>
              <TextInput  mt="md" label="Subject" id="subject" placeholder="Subject" {...register("subject")} required />
              {errors.subject && <span className={classes.errorMessage} role="alert" id="subjectError">{errors.subject?.message}</span>}
            </div>

            <div className={classes.inputContainer}>
              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
                {...register("message")}
                id="message"
                required
              />
              {errors.message && <span className={classes.errorMessage} role="alert" id="messageError">{errors.message?.message}</span>}
            </div>

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control} role="sendMessage">
                Send message
              </Button>
            </Group>
            {success && <Text c="green" id="success">Message Sent!</Text>}
            {failure && <Text c="red" id="failure">Form could not be sent</Text>}
          </div>
        </form>
      </div>
    </Paper>
  );
}