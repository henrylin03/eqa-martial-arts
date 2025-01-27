import { Link } from "react-router-dom";
import {
  IconCopyright,
  IconMapPin,
  IconMail,
  IconBrandInstagram,
  IconPhoneCall,
} from "@tabler/icons-react";
import brandingImage from "/images/branding/logo-white-bg.jpg";
import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  {
    heading: "Browse",
    links: [
      { path: "/", label: "Home" },
      { path: "/timetable", label: "Timetable" },
      { path: "/contact", label: "Contact" },
      {
        path: "https://app.clubworx.com/websites/equinox-martial-arts-academy/waivers/trial-pass-waiver/signed_waivers/new",
        label: "Book a free trial",
      },
    ],
  },
  {
    heading: "Classes",
    links: [
      { path: "/kids-classes", label: "Kids" },
      { path: "/adults-classes", label: "Adults" },
      { path: "/womens-classes", label: "Girls and women" },
    ],
  },
  {
    heading: "Contact",
    items: [
      {
        label: "Location",
        icon: <IconMapPin size="100%" />,
        value: `18/390 Eastern Valley Way
Chatswood NSW 2067`,
      },
      {
        label: "Email",
        icon: <IconMail size="100%" />,
        value: "info@equinoxacademy.com.au",
      },
      {
        label: "Phone",
        value: "0422 132 651",
        icon: <IconPhoneCall size="100%" />,
      },
    ],
  },
  {
    heading: "Follow us",
    links: [
      {
        label: "Instagram",
        icon: <IconBrandInstagram size="100%" />,
        link: "https://www.instagram.com/equinoxmartialarts/",
      },
    ],
  },
];

const Footer = () => {
  const footerColumns = FOOTER_LINKS.map((column) => {
    let columnContent = [];

    if (column.heading === "Contact")
      columnContent = column.items.map((item) => (
        <div
          className={styles.contactItem}
          aria-label={item.label}
          key={item.label}
        >
          <figure className={styles.icon}>{item.icon}</figure>
          {item.label === "Email" ? (
            <a
              href={`mailto:${item.value}`}
              aria-label="Send email"
              className={styles.link}
            >
              {item.value}
            </a>
          ) : (
            <p className={styles.contactValue}>{item.value}</p>
          )}
        </div>
      ));
    else if (column.heading === "Follow us")
      columnContent = column.links.map((item) => (
        <a
          href={item.link}
          aria-label={`Visit our ${item.label}`}
          target="_blank"
          className={styles.socialsIconContainer}
          key={item.label}
        >
          {item.icon}
        </a>
      ));
    else
      columnContent = column.links.map((link) =>
        link.label === "Book a free trial" ? (
          <a
            href={link.path}
            target="_blank"
            aria-label="Book a free trial with Equinox"
            className={styles.link}
            key={link.label}
          >
            Book a free trial
          </a>
        ) : (
          <Link
            to={link.path}
            aria-label={`Go to ${link.label} page`}
            key={link.label}
            className={styles.link}
          >
            {link.label}
          </Link>
        ),
      );

    return (
      <div className={styles.column} key={column.heading}>
        <h2 className={styles.heading}>{column.heading}</h2>
        {columnContent}
      </div>
    );
  });

  return (
    <footer className={styles.footer}>
      <section className={styles.top}>
        <Link
          to="/"
          aria-label="Go to home page"
          className={styles.brandingLink}
        >
          <img
            src={brandingImage}
            alt="Logo for Equinox Academy"
            className={styles.brandingImage}
          />
        </Link>

        {footerColumns}
      </section>

      <section className={styles.bottom}>
        <div className={styles.inner}>
          <figure className={styles.copyrightIcon}>
            <IconCopyright size="100%" />
          </figure>
          <small className={styles.copyrightText}>
            2025 Equinox Academy. All rights reserved.
          </small>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
