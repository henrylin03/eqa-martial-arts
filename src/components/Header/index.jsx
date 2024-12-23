import { NavLink, Link } from "react-router-dom";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  Menu,
  Button,
  Burger,
  Drawer,
  UnstyledButton,
  Collapse,
} from "@mantine/core";
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
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const isNarrowScreen = useMediaQuery("(max-width: 739px)");

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

    if (isNarrowScreen)
      return (
        <div key={linkObject.label} className={styles.sublinkNarrowWrapper}>
          <UnstyledButton onClick={toggleLinks} className={styles.sublinkLabel}>
            <span>{linkObject.label}</span>
            <IconChevronDown
              size={16}
              className={
                linksOpened
                  ? styles.chevronIconCollapseOpened
                  : styles.chevronIcon
              }
            />
          </UnstyledButton>

          <Collapse in={linksOpened}>
            <div className={styles.sublinksDrawer}>
              {linkObject.sublinks.map((sublink) => (
                <NavLink
                  key={sublink.label}
                  to={sublink.path}
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : undefined
                  }
                >
                  {sublink.label}
                </NavLink>
              ))}
            </div>
          </Collapse>
        </div>
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

        <Menu.Dropdown className={styles.menuDropdown}>
          {linkObject.sublinks.map((sublink) => (
            <Menu.Item key={sublink.label} className={styles.menuDropdownLink}>
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
      <div className={styles.inner}>
        <Link
          to="/"
          aria-label="Return to home page"
          className={styles.branding}
        >
          <img
            src={brandingImage}
            className={styles.brandingImage}
            alt="Logo for Equinox Academy Martial Arts"
          />
        </Link>

        <div className={styles.navContainerWide}>
          <nav className={styles.nav}>{navLinks}</nav>
        </div>

        {isNarrowScreen ? (
          <Button
            variant="filled"
            color="orange"
            className={styles.button}
            size="xs"
            radius="xl"
          >
            Free trial
          </Button>
        ) : (
          <Button
            variant="filled"
            color="orange"
            className={styles.button}
            size="md"
            radius="xl"
          >
            Book a free trial
          </Button>
        )}

        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          color="white"
          className={styles.burger}
        />

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          hiddenFrom="sm"
          className={styles.drawer}
          padding="lg"
        >
          <div className={styles.drawerInner}>
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
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
