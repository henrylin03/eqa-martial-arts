import { Link } from "react-router-dom";
import { useDisclosure, useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { Burger, Drawer } from "@mantine/core";
import Nav from "./Nav";
import CallToActionButton from "../CallToActionButton";
import brandingImage from "/images/branding/logo-white-bg.jpg";
import brandingImageShrunk from "/images/branding/logo-white-bg-cropped.jpg";
import styles from "./Header.module.css";

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const isNarrowScreen = useMediaQuery("(max-width: 899px)");
  const [scrollPosition, _] = useWindowScroll();

  const isScrolledDown = scrollPosition.y > 200;

  return (
    <header
      className={
        isScrolledDown && !isNarrowScreen ? styles.headerShrunk : styles.header
      }
    >
      <div className={styles.inner}>
        <Link
          to="/"
          aria-label="Return to home page"
          className={styles.branding}
        >
          <img
            src={brandingImage}
            className={styles.brandingImage}
            alt="Logo"
          />
        </Link>

        {isNarrowScreen ? (
          <>
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={styles.burger}
              aria-label="Toggle page navigation links"
            />
            <Drawer
              opened={drawerOpened}
              onClose={closeDrawer}
              className={styles.drawer}
              padding="lg"
            >
              <div className={styles.drawerInner}>
                <Nav
                  isNarrowScreen={isNarrowScreen}
                  closeDrawer={closeDrawer}
                />
                <CallToActionButton className={styles.button} />
              </div>
            </Drawer>
          </>
        ) : (
          <Nav isNarrowScreen={isNarrowScreen} />
        )}

        <CallToActionButton
          size={isNarrowScreen ? "xs" : "md"}
          buttonText={isNarrowScreen ? "Free trial" : "Book a free trial"}
          customCssClass={styles.button}
        />
      </div>
    </header>
  );
};

export default Header;
