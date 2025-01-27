import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import { useDisclosure, useFocusTrap } from "@mantine/hooks";
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

const Nav = ({ isNarrowScreen = false, closeDrawer = () => {} }) => {
  const currentLocation = useLocation();
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const focusTrapRef = useFocusTrap();

  const isClassPage = PAGE_LINKS.find(
    (link) =>
      link.label === "Classes" &&
      link.sublinks.some(
        (sublink) => currentLocation.pathname === sublink.path,
      ),
  );

  const navLinks = PAGE_LINKS.map((linkObject) => {
    if (!linkObject.hasOwnProperty("sublinks"))
      return (
        <NavLink
          key={linkObject.label}
          to={linkObject.path}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
          onClick={closeDrawer}
        >
          {linkObject.label}
        </NavLink>
      );

    if (isNarrowScreen)
      return (
        <div key={linkObject.label} className={styles.sublinkNarrowWrapper}>
          <UnstyledButton onClick={toggleLinks} className={styles.sublinkLabel}>
            <span className={isClassPage ? styles.activeLink : undefined}>
              {linkObject.label}
            </span>
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
                  onClick={closeDrawer}
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
        trigger="click-hover"
        transitionProps={{ exitDuration: 0 }}
        ref={focusTrapRef}
        loop={false}
        withinPortal={false}
        trapFocus={false}
        menuItemTabIndex={0}
        radius="lg"
      >
        <Menu.Target>
          <UnstyledButton className={styles.sublinkLabel} p={4}>
            <span className={isClassPage ? styles.activeLink : undefined}>
              {linkObject.label}
            </span>
            <IconChevronDown size={16} />
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown className={styles.menuDropdown}>
          {linkObject.sublinks.map((sublink) => (
            <NavLink
              to={sublink.path}
              key={sublink.label}
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
              tabIndex={-1}
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
  closeDrawer: PropTypes.func,
};

export default Nav;
