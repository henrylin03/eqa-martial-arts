import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { UnstyledButton, Collapse, Menu } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import PAGE_LINKS from "./PAGE_LINKS";
import styles from "./Header.module.css";

const Nav = ({ isNarrowScreen }) => {
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

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

  return isNarrowScreen ? (
    <nav className={styles.nav}>{navLinks}</nav>
  ) : (
    <div className={styles.navContainerWide}>
      <nav className={styles.nav}>{navLinks}</nav>
    </div>
  );
};

Nav.propTypes = {
  isNarrowScreen: PropTypes.bool.isRequired,
};

export default Nav;
