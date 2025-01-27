import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "@mantine/core";
import CallToActionButton from "../CallToActionButton";
import styles from "./AboveTheFoldSection.module.css";

const AboveTheFoldSection = ({ pageName, subtext = "" }) => {
  return (
    <section className={styles.aboveTheFold}>
      <div className={styles.aboveTheFoldInner}>
        <h1 className={styles.pageTitle}>{pageName}</h1>

        {subtext && <div className={styles.subtext}>{subtext}</div>}

        <div className={styles.buttonGroup}>
          <CallToActionButton />

          {!pageName.toLowerCase().includes("timetable") && (
            <Link
              to="/timetable"
              aria-label="See timetable for classes"
              tabIndex={-1}
            >
              <Button variant="outline" color="#e36802" radius="xl">
                Class timetable
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

AboveTheFoldSection.propTypes = {
  pageName: PropTypes.string.isRequired,
  subtext: PropTypes.element,
};

export default AboveTheFoldSection;
