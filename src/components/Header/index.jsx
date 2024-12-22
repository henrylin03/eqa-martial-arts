import { NavLink, Link } from "react-router-dom";
import { Menu, Button } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import brandingImage from "/images/branding/logo-black-bg.png";
import styles from "./Header.module.css";

const PAGE_LINKS = [
  { path: "/", label: "Home" },
  {
    path: null,
    label: "Classes",
    sublinks: [
      { path: "/kids-classes", label: "Kids" },
      { path: "/adults-classes", label: "Adults" },
      { path: "/girls-and-women-classes", label: "Girls/Women" },
    ],
  },
  { path: "/timetable", label: "Timetable" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  const navLinks = PAGE_LINKS.map((linkObject) => {
    if (!linkObject.hasOwnProperty("sublinks"))
      return (
        <NavLink
          key={linkObject.label}
          to={linkObject.path}
          className={({ isActive }) =>
            isActive ? styles.activeLink : undefined
          }
        >
          {linkObject.label}
        </NavLink>
      );

    return (
      <Menu
        key={linkObject.label}
        trigger="hover"
        transitionProps={{ exitDuration: 0 }}
        withinPortal
      >
        <Menu.Target>
          <div className={styles.sublinkLabel}>
            <span>{linkObject.label}</span>
            <IconChevronDown size={16} />
          </div>
        </Menu.Target>

        <Menu.Dropdown>
          {linkObject.sublinks.map((sublink) => (
            <Menu.Item key={sublink.label}>
              <NavLink
                to={sublink.path}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : undefined
                }
              >
                {sublink.label}
              </NavLink>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    );
  });

  return (
    <header className={styles.header}>
      <Link to="/" aria-label="Return to home page">
        <img
          src={brandingImage}
          className={styles.branding}
          alt="Logo for Equinox Academy Martial Arts"
        />
      </Link>

      <nav className={styles.nav}>{navLinks}</nav>

      <Button
        variant="filled"
        color="orange"
        className={styles.button}
        size="md"
        radius="xl"
      >
        Book a free trial
      </Button>
    </header>
  );
};

export default Header;
