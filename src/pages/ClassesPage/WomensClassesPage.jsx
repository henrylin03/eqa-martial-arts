import { Badge } from "@mantine/core";
import ImageWithLoadingSkeleton from "../../components/ImageWithLoadingSkeleton";
import CallToActionSection from "../../components/CallToActionSection";
import AboveTheFoldSection from "../../components/AboveTheFoldSection";
import TickIcon from "./TickIcon";
import SEOHelmet from "../../components/SEOHelmet";
import seoConfig from "../../config/seo.config";
import styles from "./Classes.module.css";

const WomensClassesPage = () => {
  const { title, description, keywords, canonicalUrl, ogImage } =
    seoConfig.womensClasses;

  return (
    <>
      <SEOHelmet
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
      />

      <AboveTheFoldSection pageName="Girls and Womens classes" />

      <section className={styles.classTypes}>
        <article className={styles.classType}>
          <div className={styles.inner}>
            <ImageWithLoadingSkeleton
              src="/images/girls-in-gi.JPEG"
              className={styles.gridImageCentred}
            />
            <div className={styles.textContainer}>
              <h2 className={styles.sectionHeading}>Girls only classes</h2>
              <div className={styles.badges}>
                <Badge variant="outline" color="grey">
                  Ages 10+
                </Badge>
              </div>
              <p className={styles.classDescription}>
                Enrol your daughter in Equinox's girls only classes, designed to
                ease girls into self-defence in a safe and supportive
                environment. Classes are led by female instructors and are
                designed to allow each student to progress at her own pace – no
                prior experience is required.
              </p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>
                  <TickIcon />
                  <span className={styles.benefitText}>
                    Learn essential self-defence techniques
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon />
                  <span className={styles.benefitText}>
                    Build confidence, discipline and physical fitness
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon />
                  <span className={styles.benefitText}>
                    Feel empowered, capable, and prepared for any situation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className={styles.classTypeColoured}>
          <div className={styles.inner}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionHeading}>Women's only classes</h2>
              <p className={styles.classDescription}>
                Experience our womens only classes, led by experienced female
                instructors, and join our supportive community that celebrates
                each woman's journey in martial arts.
              </p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Learn practical self-defence techniques in a safe space
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Get in shape with a fun, full-body workout to improve your
                    strength and cardiovascular fitness
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Build confidence and feel empowered
                  </span>
                </li>
              </ul>
            </div>
            <ImageWithLoadingSkeleton
              src="/images/kobi-spider.jpg"
              className={styles.gridImage}
            />
          </div>
        </article>
      </section>

      <CallToActionSection />
    </>
  );
};

export default WomensClassesPage;
