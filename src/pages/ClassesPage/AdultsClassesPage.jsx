import ImageWithLoadingSkeleton from "../../components/ImageWithLoadingSkeleton";
import AboveTheFoldSection from "../../components/AboveTheFoldSection";
import CallToActionSection from "../../components/CallToActionSection";
import TickIcon from "./TickIcon";
import styles from "./Classes.module.css";

const AdultsClassesPage = () => {
  return (
    <>
      <AboveTheFoldSection pageName="Adults classes" />

      <section className={styles.classTypes}>
        <article className={styles.classType}>
          <div className={styles.inner}>
            <ImageWithLoadingSkeleton
              src="/images/james-omoplata.jpg"
              className={styles.gridImageRight}
            />
            <div className={styles.textContainer}>
              <h2 className={styles.sectionHeading}>
                Brazilian Jiujitsu (BJJ)
              </h2>
              <p className={styles.classDescription}>
                Join our Brazilian Jiujitsu (BJJ) classes to experience the
                beauty of <em>The Gentle Art</em>!
              </p>
              <p className={styles.classDescription}>
                Our experienced instructors teach core grappling techniques
                including takedowns, escaping positions and applying
                submissions. In our Intermediate classes and above, spar
                ("roll") with your friendly training partners to apply your
                techniques in a safe and supervised environment.
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
                    Build both strength and cardiovascular endurance in a fun,
                    full-body workout
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon />
                  <span className={styles.benefitText}>
                    Meet new friends in our welcoming and vibrant community of
                    training partners
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
                and clinches.
              </p>
              <p className={styles.classDescription}>
                Combining drills, conditioning, and pad work, our one-hour
                classes will help you master <em>The Art of Eight Limbs</em> -
                using punches, kicks, elbows and knees.
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
                    Master a variety of striking, sweeping and clinching
                    self-defence techniques
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Push yourself out of your comfort zone in a high-energy and
                    supportive environment
                  </span>
                </li>
              </ul>
            </div>
            <ImageWithLoadingSkeleton
              src="/images/mt-darien.jpg"
              className={styles.gridImageFarRight}
            />
          </div>
        </article>

        <article className={styles.classType}>
          <div className={styles.inner}>
            <ImageWithLoadingSkeleton
              src="/images/adults-mma.jpg"
              className={styles.gridImageFarRight}
            />
            <div className={styles.textContainer}>
              <h2 className={styles.sectionHeading}>
                Mixed Martial Arts (MMA)
              </h2>
              <p className={styles.classDescription}>
                Join our Mixed Martial Arts (MMA) classes for the ultimate blend
                of striking and grappling techniques!
              </p>
              <p className={styles.classDescription}>
                Designed for all skill levels, MMA combines both striking and
                grappling arts - including Muay Thai, boxing, wrestling, and
                Brazilian Jiujitsu (BJJ). Our structured curriculum and
                experienced instructors will take you through technique drills,
                partner work and light sparring in a supervised and safe
                environment.
              </p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Combine useful self-defence techniques to build a
                    well-rounded skillset across multiple martial arts
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Build physical fitness in strength, speed, and
                    cardiovascular endurance
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
