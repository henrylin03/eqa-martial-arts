import { Link } from "react-router-dom";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Burger, Drawer } from "@mantine/core";
import Nav from "./Nav";
import CallToActionButton from "../CallToActionButton";
import brandingImage from "/images/branding/logo-black-bg.png";
import styles from "./Header.module.css";

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const isNarrowScreen = useMediaQuery("(max-width: 739px)");

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

        {isNarrowScreen ? (
          <>
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
                <Nav isNarrowScreen={isNarrowScreen} />
                <CallToActionButton className={styles.button} />
              </div>
            </Drawer>
          </>
        ) : (
          <Nav isNarrowScreen={isNarrowScreen} />
        )}

        <CallToActionButton
          className={styles.button}
          isNarrowScreen={isNarrowScreen}
        />
      </div>
    </header>
  );
};

export default Header;
