import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { UnstyledButton, Collapse, Menu } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import styles from "./Header.module.css";

const PAGE_LINKS = [
  { path: "/", label: "Home" },
  {
    path: null,
    label: "Classes",
    sublinks: [
      { path: "/kids-classes", label: "Kids" },
      { path: "/adults-classes", label: "Adults" },
      { path: "/womens-classes", label: "Girls/Women" },
    ],
  },
  { path: "/timetable", label: "Timetable" },
  { path: "/contact", label: "Contact" },
];

const Nav = ({ isNarrowScreen }) => {
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const navLinks = PAGE_LINKS.map((linkObject) => {
    if (!linkObject.hasOwnProperty("sublinks"))
      return (
        <NavLink
          key={linkObject.label}
          to={linkObject.path}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
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
                    isActive ? styles.activeLink : styles.sublink
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
            <NavLink
              to={sublink.path}
              key={sublink.label}
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
            >
              <Menu.Item className={styles.menuDropdownLink}>
                {sublink.label}
              </Menu.Item>
            </NavLink>
          ))}
        </Menu.Dropdown>
      </Menu>
    );
  });

  return isNarrowScreen ? (
    <nav className={styles.nav}>{navLinks}</nav>
  ) : (
    <div className={styles.navContainerWide}>
      <nav className={styles.nav}>{navLinks}</nav>
    </div>
  );
};

Nav.propTypes = {
  isNarrowScreen: PropTypes.bool,
};

export default Nav;
