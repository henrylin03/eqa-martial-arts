import { Link } from "react-router-dom";
import { Badge, Button, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import TickIcon from "./TickIcon";
import styles from "./Classes.module.css";

const AdultsClassesPage = () => {
  const isNarrowScreen = useMediaQuery("(max-width: 749px)");

  return (
    <>
      <section className={styles.aboveTheFold}>
        <div className={styles.inner}>
          <Badge variant="outline" color="orange">
            Ages 15+
          </Badge>
          <h1 className={styles.pageTitle}>Adults classes</h1>
          <div className={styles.buttonGroup}>
            <Button color="orange" radius="xl">
              Book a free trial
            </Button>
            {/* TODO: LINK TO THE ADULTS TIMETABLE SECTION OF TIMETABLE PAGE */}
            <Link
              to="/timetable"
              aria-label="See timetable for adults' classes"
            >
              <Button variant="outline" color="orange" radius="xl" bg="white">
                Class timetable
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TODO: REFACTOR THE FOLLOWING INTO AN ARRAY OF OBJECTS THAT I CAN .MAP OVER */}
      <section className={styles.classTypes}>
        <article className={styles.classType}>
          <div className={styles.inner}>
            <Image
              radius="lg"
              src="/images/james-omoplata.jpg"
              className={styles.adultsBjjImage}
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
            <Image
              radius="lg"
              src="/images/jonathan-tomas-rX36vcriciQ-unsplash.jpg"
              className={styles.gridImage}
            />
          </div>
        </article>

        <article className={styles.classType}>
          <div className={styles.inner}>
            <Image
              radius="lg"
              src="/images/adults-mma.jpg"
              className={styles.mmaImage}
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

      <section className={styles.ctaSectionWhiteBg}>
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
    </>
  );
};

export default AdultsClassesPage;
