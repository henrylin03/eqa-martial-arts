import { Badge, Image } from "@mantine/core";
import TickIcon from "./TickIcon";
import AboveTheFoldSection from "../../components/AboveTheFoldSection";
import CallToActionSection from "../../components/CallToActionSection";
import styles from "./Classes.module.css";

const KidsClassesPage = () => {
  return (
    <>
      <AboveTheFoldSection pageName="Kids classes" />

      {/* TODO: REFACTOR THE FOLLOWING INTO AN ARRAY OF OBJECTS THAT I CAN .MAP OVER */}
      <section className={styles.classTypes}>
        <article className={styles.classType}>
          <div className={styles.inner}>
            <Image
              radius="lg"
              src="/images/riley-black-gi.jpg"
              className={styles.gridImage}
            />
            <div className={styles.textContainer}>
              <h2 className={styles.sectionHeading}>Pre-schoolers</h2>
              <div className={styles.badges}>
                <Badge variant="outline" color="grey">
                  Ages 3-4
                </Badge>
                <Badge variant="outline" color="grey">
                  With parents
                </Badge>
              </div>
              <p className={styles.classDescription}>
                Enrol your child in our specialty classes, designed to ease
                young children into the basics of martial arts in a playful and
                supportive environment.
              </p>
              <p className={styles.classDescription}>
                With parent participation, we've jam-packed our 45-minute
                classes with games, exercises and creative movements to keep the
                little ones excited and motivated.
              </p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>
                  <TickIcon />
                  <span className={styles.benefitText}>
                    Bond with your child in shared moments of fun and connection
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon />
                  <span className={styles.benefitText}>
                    Help your child develop physical coordination, balance and
                    confidence
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon />
                  <span className={styles.benefitText}>
                    Learn a variety of techniques across striking and grappling
                    arts
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className={styles.classTypeColoured}>
          <div className={styles.inner}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionHeading}>
                Introduction to Martial Arts
              </h2>
              <Badge variant="outline" color="grey">
                Ages 5-6
              </Badge>
              <p className={styles.classDescription}>
                Introduce young children to the basics of martial arts through
                our fun and engaging classes that combine a wide variety of
                techniques from both striking and grappling arts.
              </p>
              <p className={styles.classDescription}>
                Our 45-minute classes are filled with engaging drills and
                exciting games to help your child:
              </p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Build physical fitness, coordination and confidence
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Master a variety of self-defence techniques
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Develop valuable life skills like discipline, focus and
                    resilience
                  </span>
                </li>
              </ul>
            </div>
            <Image
              radius="lg"
              src="/images/kids-intro-roll.jpg"
              className={styles.gridImage}
            />
          </div>
        </article>

        <article className={styles.classType}>
          <div className={styles.inner}>
            <Image
              radius="lg"
              src="/images/JuJitsu-Kids.jpg"
              className={styles.gridImageCentredDown}
            />
            <div className={styles.textContainer}>
              <h2 className={styles.sectionHeading}>Kids Jiujitsu</h2>
              <Badge variant="outline" color="grey">
                Ages 7-9
              </Badge>
              <p className={styles.classDescription}>
                Dive into an exciting world of Brazilian Jiujitsu (BJJ)
                techniques that teach your child how to escape and control
                positions and apply submissions safely - all while having a
                blast with friends!
              </p>
              <p className={styles.classDescription}>
                But, it's not just about the moves - we make our 45-minute
                classes fun by running games and challenges that:
              </p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Teach students how to stand up to bullying with positive
                    strategies
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Develop students' physical fitness, including their strength
                    and coordination
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Foster important life skills like teamwork, resilience and
                    respect for others
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className={styles.classTypeColoured}>
          <div className={styles.inner}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionHeading}>Teens Jiujitsu</h2>
              <Badge variant="outline" color="grey">
                Ages 10+
              </Badge>
              <p className={styles.classDescription}>
                With a dynamic blend of self-defence and physical conditioning,
                our 1-hour classes teach teenagers important techniques of
                Brazilian Jiujitsu (BJJ), also known as the "gentle art".
              </p>
              <p className={styles.classDescription}>
                Our highly-experienced instructors focus on helping teens:
              </p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Develop physical conditioning through a full-body workout
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Master grappling-based, self-defence techniques that
                    emphasise control
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Instill mental resilience, self-assurance, and respect for
                    others
                  </span>
                </li>
              </ul>
            </div>
            <Image
              radius="lg"
              src="/images/James-Teens-Instructor.jpg"
              className={styles.gridImage}
            />
          </div>
        </article>

        <article className={styles.classType}>
          <div className={styles.inner}>
            <Image
              radius="lg"
              src="/images/Kids-MMA.jpg"
              className={styles.gridImageCentred}
            />
            <div className={styles.textContainer}>
              <h2 className={styles.sectionHeading}>
                Mixed Martial Arts (MMA)
              </h2>
              <div className={styles.badges}>
                <Badge variant="outline" color="grey">
                  Ages 7-9
                </Badge>
                <Badge variant="outline" color="grey">
                  Ages 10+
                </Badge>
              </div>
              <p className={styles.classDescription}>
                Our Kids and Teens MMA programs offer a structured approach to
                combining techniques from both striking and grappling martial
                arts.
              </p>
              <p className={styles.classDescription}>
                Catered to all skill levels, our classes (45 minutes for Kids, 1
                hour for Teens) combine skill-based drills, partner work, and
                light sparring in a supervised and safe environment, helping our
                young warriors to:
              </p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Master self-defence techniques that combine Muay Thai,
                    Brazilian Jiujitsu (BJJ), wrestling and more
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Develop strength, agility, and coordination
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Build confidence and resilience
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
              <div className={styles.badges}>
                <Badge variant="outline" color="grey">
                  Ages 7-9
                </Badge>
                <Badge variant="outline" color="grey">
                  Ages 10+
                </Badge>
              </div>
              <p className={styles.classDescription}>
                Introduce both Kids and Teens to Muay Thai, a traditional
                striking and clinching martial art from Thailand, all in a safe
                and supportive environment.
              </p>
              <p className={styles.classDescription}>
                Through age-appropriate drills and exercises in our classes (45
                minutes for Kids, 1 hour for Teens), students learn a variety of
                standing striking techniques in the "Art of Eight Limbs",
                incorporating punching, kicking, elbowing and kneeing, as well
                as clinching and sweeping.
              </p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Develop essential striking, clinching and sweeping
                    techniques
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Build confidence, strength and cardiovascular fitness in a
                    full-body workout
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Learn valuable life lessons such as discipline, teamwork,
                    and respect for others
                  </span>
                </li>
              </ul>
            </div>
            {/* NEED TO REPLACE THIS IMAGE WITH A NON-STOCK PHOTO WHEN AVAILABLE */}
            <Image
              radius="lg"
              src="/images/pexels-gustavo-fring-6720438.jpg"
              className={styles.gridImage}
            />
          </div>
        </article>
      </section>

      <CallToActionSection isWhiteBg={false} />
    </>
  );
};

export default KidsClassesPage;
