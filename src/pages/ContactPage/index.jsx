import { IconPhoneCall, IconMail, IconMapPin } from "@tabler/icons-react";
import ContactForm from "../../components/ContactForm";
import locationMapWide from "/map/location.png";
import locationMapNarrow from "/map/location-narrow.png";
import styles from "./ContactPage.module.css";

const LINK_TO_GOOGLE_MAPS_LOCATION =
  "https://www.google.com/maps/place/Equinox+Academy/@-33.7830204,151.1941977,17z/data=!3m2!4b1!5s0x6b12a922c399a5fd:0x453ac2d461d16afc!4m6!3m5!1s0x6b12a9a4e3b7e243:0x7d33943c794b313f!8m2!3d-33.7830249!4d151.1967726!16s%2Fg%2F11lyg83h10?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D";

const ContactMethods = () => {
  const CONTACT_METHODS_DATA = [
    { label: "phone", value: "0422 132 652", icon: <IconPhoneCall /> },
    { label: "email", value: "info@equinoxacademy.com.au", icon: <IconMail /> },
    {
      label: "Visit us at our address",
      value: "18/390 Eastern Valley Way, Chatswood NSW 2067",
      icon: <IconMapPin />,
    },
  ];

  const contactMethods = CONTACT_METHODS_DATA.map((c) => {
    let contactDetails = <></>;

    if (c.label === "phone")
      contactDetails = (
        <p className={styles.contactValue} key={c.label}>
          {c.value}
        </p>
      );
    else if (c.label === "email")
      contactDetails = (
        <a
          href={`mailto:${c.value}`}
          aria-label={`Send email to ${c.value}`}
          className={styles.link}
          target="_blank"
          key={c.label}
        >
          {c.value}
        </a>
      );
    else
      contactDetails = (
        <a
          href={LINK_TO_GOOGLE_MAPS_LOCATION}
          target="_blank"
          aria-label="Open Google Maps to see gym location"
          className={styles.link}
          key={c.label}
        >
          {c.value}
        </a>
      );

    return (
      <div className={styles.contactMethod} aria-label={c.label} key={c.label}>
        <figure className={styles.contactIcon}>{c.icon}</figure>
        {contactDetails}
      </div>
    );
  });

  return <div className={styles.contactMethods}>{contactMethods}</div>;
};

const ContactPage = () => {
  return (
    <section className={styles.contactPage}>
      <article className={styles.textAndFormContainer}>
        <div className={styles.top}>
          <h1 className={styles.pageTitle}>Get in touch</h1>
          <p className={styles.paragraphText}>We'd love to hear from you!</p>
        </div>
        <ContactMethods />

        <ContactForm />
      </article>

      <article className={styles.map}>
        <a
          href={LINK_TO_GOOGLE_MAPS_LOCATION}
          target="_blank"
          aria-label="See location of Equinox Academy in Google Maps"
        >
          <picture>
            <source media="(max-width: 753px)" srcSet={locationMapWide} />
            <source media="(min-width: 754px)" srcSet={locationMapNarrow} />
            <img
              src={locationMapNarrow}
              className={styles.mapScreenshot}
              alt="Location of Equinox Academy on maps"
            />
          </picture>
        </a>
      </article>
    </section>
  );
};

export default ContactPage;
