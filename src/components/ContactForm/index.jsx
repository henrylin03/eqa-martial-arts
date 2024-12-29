import { useState } from "react";
import { useForm, isNotEmpty, isEmail, hasLength } from "@mantine/form";
import { Button, Textarea, TextInput } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import emailjs from "@emailjs/browser";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const isNarrowScreen = useMediaQuery("(max-width: 899px");

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },

    validate: {
      firstName: hasLength({ min: 2 }, "Please enter your first name"),
      email: isEmail("Please enter a valid email"),
      message: isNotEmpty("Please enter your message"),
    },
  });

  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async () => {
    const SERVICE_ID = "test";
    const ADMIN_NOTIFICATION_EMAIL_TEMPLATE_ID = "admin_template";
    const PUBLIC_KEY = "XMj_5s32EB3qP29Z_";

    const { firstName, lastName, email, phone, message } = form.getValues();

    let templateParams = {
      from_name: lastName ? `${firstName} ${lastName}` : firstName, // this is name of user who submitted contact form
      message_html: message,
      email: email,
      phone: phone || "Not provided",
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        ADMIN_NOTIFICATION_EMAIL_TEMPLATE_ID,
        templateParams,
        {
          publicKey: PUBLIC_KEY,
        },
      );
      setIsSent(true);
      form.reset();
    } catch (error) {
      console.error("Failed to send email", error.text);
    }
  };

  if (isSent)
    return (
      <article className={styles.successMessageContainer}>
        <IconCircleCheckFilled size={96} color="orange" />
        <div className={styles.textContainer}>
          <h2>Thank you!</h2>
          <p className={styles.paragraphText}>
            Your message has been sent to the Equinox team
          </p>
        </div>
      </article>
    );

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} className={styles.form}>
      <div className={styles.inputContainer}>
        <TextInput
          label="First Name"
          placeholder="First name"
          withAsterisk
          key={form.key("firstName")}
          disabled={form.submitting}
          {...form.getInputProps("firstName")}
        />

        <TextInput
          label="Last Name"
          placeholder="Last name"
          key={form.key("lastName")}
          {...form.getInputProps("lastName")}
          disabled={form.submitting}
        />
      </div>

      <div className={styles.inputContainer}>
        <TextInput
          label="Email"
          placeholder="you@email.com"
          withAsterisk
          key={form.key("email")}
          {...form.getInputProps("email")}
          disabled={form.submitting}
        />

        <TextInput
          label="Phone number"
          placeholder="0412 345 678"
          key={form.key("phone")}
          {...form.getInputProps("phone")}
          disabled={form.submitting}
        />
      </div>

      <Textarea
        label="Message"
        withAsterisk
        key={form.key("message")}
        {...form.getInputProps("message")}
        autosize
        minRows={4}
        disabled={form.submitting}
      />

      <Button
        type="submit"
        color="orange"
        radius="xl"
        size={isNarrowScreen ? "sm" : "md"}
        loading={form.submitting}
      >
        Send message
      </Button>
    </form>
  );
};

export default ContactForm;
