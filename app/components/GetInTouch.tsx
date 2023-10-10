import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from '../css/GetInTouch.module.css';
// import {
//   useForm as useFormFormspree ,
//   ValidationError as ServerError
// } from "@formspree/react";
// import { toast } from 'react-toastify';
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
      //   await fetch('https://formspree.io/f/xeqbpdrj', {
      //     method: 'POST',
      //     body: formData,
      //   })
      //   .then((response) => {
      //   console.log(response)
      // })
      //   .catch((error) => {
      //     console.log(error)
      //   });
      axios.post('https://formspree.io/f/xeqbpdrj', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response.data);
        setSuccess(true)
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
      setSuccess(true)
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

        {/* FORM ELEMENT */}
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Text fz="xl" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <div>
                <TextInput  id="name" label="Your name" placeholder="Your name" {...register("name")}
                 />
                {errors.name && <span className={classes.errorMessage} role="alert">{errors.name?.message}</span>}
              </div>
              <div>
                <TextInput  label="Your email" placeholder="johndoe@gmail.com" type='email'  {...register("email")} required />
                {errors?.email && <span className={classes.errorMessage} role="alert">{errors.email?.message}</span>}
              </div>
            </SimpleGrid>

            <div>
              <TextInput  mt="md" label="Subject" placeholder="Subject" {...register("subject")} required />
              {errors.subject && <span className={classes.errorMessage} role="alert">{errors.subject?.message}</span>}
            </div>

            <div>
              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
                {...register("message")}
                required
              />
              {errors.message && <span className={classes.errorMessage} role="alert">{errors.message?.message}</span>}
            </div>

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
            {success && <Text>Message Sent!</Text>}
          </div>
        </form>
      </div>
    </Paper>
  );
}