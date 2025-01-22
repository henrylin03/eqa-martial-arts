import { useState } from "react";
import { Skeleton } from "@mantine/core";
import CallToActionSection from "../../components/CallToActionSection";
import AboveTheFoldSection from "../../components/AboveTheFoldSection";
import SEOHelmet from "../../components/SEOHelmet";
import seoConfig from "../../config/seo.config";
import styles from "./TimetablePage.module.css";

const TimetablePage = () => {
  const [isLoadingLiveTimetable, setIsLoadingLiveTimetable] = useState(true);

  const { title, description, keywords, canonicalUrl } = seoConfig.timetable;

  return (
    <>
      <SEOHelmet
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
      />

      <AboveTheFoldSection pageName="Timetable" />

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
