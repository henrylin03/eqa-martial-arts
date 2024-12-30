import { Link } from "react-router-dom";
import { Badge, Button, Image } from "@mantine/core";
import CallToActionSection from "../../components/CallToActionSection";
import TickIcon from "./TickIcon";
import styles from "./Classes.module.css";

const WomensClassesPage = () => {
  return (
    <>
      <section className={styles.aboveTheFold}>
        <div className={styles.inner}>
          <h1 className={styles.pageTitle}>Girls & Womens Classes</h1>
          <div className={styles.buttonGroup}>
            <Button color="orange" radius="xl">
              Book a free trial
            </Button>
            <Link to="/timetable" aria-label="See timetable for kids' classes">
              <Button variant="outline" color="orange" radius="xl" bg="white">
                Class timetable
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.classTypes}>
        <article className={styles.classType}>
          <div className={styles.inner}>
            <Image
              radius="lg"
              src="/images/girls-in-gi.jpg"
              className={styles.gridImageCentred}
            />
            <div className={styles.textContainer}>
              <h2 className={styles.sectionHeading}>Girls Only Classes</h2>
              <div className={styles.badges}>
                <Badge variant="outline" color="grey">
                  Ages 10+
                </Badge>
              </div>
              <p className={styles.classDescription}>
                Enrol your daughter in Equinox's girls only classes, designed to
                ease girls into self-defence in a safe and supportive
                atmosphere.
              </p>
              <p className={styles.classDescription}>
                Led by experienced female instructors, these classes focus on:
              </p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>
                  <TickIcon />
                  <span className={styles.benefitText}>
                    Teaching essential self-defence techniques
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
                    Empowering girls to feel strong, capable, and prepared for
                    any situation
                  </span>
                </li>
              </ul>
              <p className={styles.classDescription}>
                Classes are designed to allow each student to progress at her
                own pace - no prior experience is required!
              </p>
            </div>
          </div>
        </article>

        <article className={styles.classTypeColoured}>
          <div className={styles.inner}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionHeading}>Women's Only Classes</h2>
              <p className={styles.classDescription}>
                Experience our women's only classes and join our supportive
                community that celebrates each woman's journey in martial arts!
              </p>
              <p className={styles.classDescription}>
                Led by highly experienced female instructors, our classes offer
                a unique opportunity to:
              </p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Learn and master practical self-defence techniques in a safe
                    space
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
                    Build confidence and feel personal empowerment
                  </span>
                </li>
              </ul>
            </div>
            <Image
              radius="lg"
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
