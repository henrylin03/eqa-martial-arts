import PropTypes from "prop-types";
import { Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./CallToActionSection.module.css";

const CallToActionSection = ({ isWhiteBg = false }) => {
  const isNarrowScreen = useMediaQuery("(max-width: 749px)");

  return (
    <section
      className={isWhiteBg ? styles.ctaSectionWhiteBg : styles.ctaSection}
    >
      <div className={styles.ctaInner}>
        <p className={styles.ctaText}>Ready to try a class?</p>
        <Button
          color="orange"
          variant="white"
          radius="xl"
          size={isNarrowScreen ? "sm" : "lg"}
        >
          Book a free trial
        </Button>
      </div>
    </section>
  );
};

CallToActionSection.propTypes = {
  isWhiteBg: PropTypes.bool,
};

export default CallToActionSection;
