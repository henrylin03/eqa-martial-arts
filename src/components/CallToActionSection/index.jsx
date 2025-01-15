import PropTypes from "prop-types";
import { useMediaQuery } from "@mantine/hooks";
import CallToActionButton from "../CallToActionButton";
import styles from "./CallToActionSection.module.css";

const CallToActionSection = ({ isWhiteBg = false }) => {
  const isNarrowScreen = useMediaQuery("(max-width: 749px)");

  return (
    <section
      className={isWhiteBg ? styles.ctaSectionWhiteBg : styles.ctaSection}
    >
      <div className={styles.ctaInner}>
        <p className={styles.ctaText}>Ready to try a class?</p>
        <CallToActionButton
          variant="white"
          size={isNarrowScreen ? "md" : "xl"}
        />
      </div>
    </section>
  );
};

CallToActionSection.propTypes = {
  isWhiteBg: PropTypes.bool,
};

export default CallToActionSection;
