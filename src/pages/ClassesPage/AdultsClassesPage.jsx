import ImageWithLoadingSkeleton from "../../components/ImageWithLoadingSkeleton";
import AboveTheFoldSection from "../../components/AboveTheFoldSection";
import CallToActionSection from "../../components/CallToActionSection";
import TickIcon from "./TickIcon";
import SEOHelmet from "../../components/SEOHelmet";
import seoConfig from "../../config/seo.config";
import styles from "./Classes.module.css";

const AdultsClassesPage = () => {
  const { title, description, keywords, canonicalUrl, ogImage } =
    seoConfig.adultsClasses;

  return (
    <>
      <SEOHelmet
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
      />

      <AboveTheFoldSection pageName="Adults classes" />

      <section className={styles.classTypes}>
        <article className={styles.classType}>
          <div className={styles.inner}>
            <ImageWithLoadingSkeleton
              src="/images/james-omoplata.jpg"
              className={styles.gridImageRight}
              alt="Head coach, James, performing a submission while wearing the traditional gi uniform."
            />
            <div className={styles.textContainer}>
              <h2 className={styles.sectionHeading}>
                Brazilian Jiu Jitsu (BJJ)
              </h2>
              <p className={styles.classDescription}>
                Join our Brazilian Jiujitsu (BJJ) classes to experience the
                beauty of "The Gentle Art". Our experienced instructors teach
                grappling techniques, including takedowns, escaping positions
                and applying submissions.
              </p>
              <p className={styles.classDescription}>
                In our Intermediate classes and above, spar ("roll") with your
                friendly training partners to apply your techniques in a safe
                and supervised environment.
              </p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>
                  <TickIcon />
                  <span className={styles.benefitText}>
                    Learn self-defence techniques that use leverage to overcome
                    bigger and stronger opponents
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon />
                  <span className={styles.benefitText}>
                    Build strength and cardiovascular endurance in a fun,
                    full-body workout
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon />
                  <span className={styles.benefitText}>
                    Meet new friends in our welcoming and vibrant community
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className={styles.classTypeColoured}>
          <div className={styles.inner}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionHeading}>Muay Thai</h2>
              <p className={styles.classDescription}>
                Experience the intensity and precision of Muay Thai, a
                traditional Thai martial art that uses stand-up striking, sweeps
                and clinches. Combining drills, conditioning, and pad work, our
                classes will help you learn “The Art of Eight Limbs,” using
                punches, kicks, elbows and knees.
              </p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Build strength, speed and endurance in a full-body,
                    cardio-intense workout
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Learn a variety of striking, sweeping and clinching
                    self-defence techniques
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Push yourself out of your comfort zone in a supportive
                    environment
                  </span>
                </li>
              </ul>
            </div>
            <ImageWithLoadingSkeleton
              src="/images/mt-darien.jpg"
              className={styles.gridImageFarRight}
              alt="Students practising kicking on Muay Thai pads, with their training partners"
            />
          </div>
        </article>

        <article className={styles.classType}>
          <div className={styles.inner}>
            <ImageWithLoadingSkeleton
              src="/images/adults-mma.jpg"
              className={styles.gridImageFarRight}
              alt="Several students, wearing MMA gloves, practising throwing punches"
            />
            <div className={styles.textContainer}>
              <h2 className={styles.sectionHeading}>
                Mixed Martial Arts (MMA)
              </h2>
              <p className={styles.classDescription}>
                Join our Mixed Martial Arts (MMA) classes for the ultimate blend
                of striking and grappling techniques.
              </p>
              <p className={styles.classDescription}>
                Designed for all skill levels, MMA combines both striking and
                grappling arts, including Muay Thai, boxing, wrestling, and BJJ.
                Our experienced instructors will take you through technique
                drills, partner work and light sparring.
              </p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Combine useful self-defence techniques to build a
                    well-rounded skill set across multiple martial arts
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Build strength, speed, and endurance
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Push your mental limits in a safe and supportive environment
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <CallToActionSection isWhiteBg={true} />
    </>
  );
};

export default AdultsClassesPage;
