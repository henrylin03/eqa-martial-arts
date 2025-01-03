import { useState } from "react";
import { Button, Skeleton } from "@mantine/core";
import CallToActionSection from "../../components/CallToActionSection";
import styles from "./TimetablePage.module.css";

const TimetablePage = () => {
  const [isLoadingLiveTimetable, setIsLoadingLiveTimetable] = useState(true);

  return (
    <>
      <section className={styles.aboveTheFold}>
        <div className={styles.aboveTheFoldInner}>
          <h1 className={styles.pageTitle}>Timetable</h1>
          {/* <p className={styles.aboveTheFoldText}>
            See our regular schedule for adults and kids classes, and our{" "}
            <a href="#live-timetable" className={styles.link}>
              live weekly schedule
            </a>
            !
          </p> */}
          <article className={styles.ctaButtons}>
            <Button color="orange" radius="xl">
              Book a free trial
            </Button>
          </article>
        </div>
      </section>

      <section id="live-timetable" className={styles.liveTimetableSection}>
        <Skeleton visible={isLoadingLiveTimetable} radius="lg">
          <iframe
            src="https://app.clubworx.com/websites/equinox-martial-arts-academy/calendar/weekly_agenda_iframe"
            className={styles.liveTimetable}
            onLoad={() => setIsLoadingLiveTimetable(false)}
          />
        </Skeleton>
      </section>

      <CallToActionSection isWhiteBg={true} />
    </>
  );
};

export default TimetablePage;
