import { Badge } from "@mantine/core";
import ImageWithLoadingSkeleton from "../../components/ImageWithLoadingSkeleton";
import AboveTheFoldSection from "../../components/AboveTheFoldSection";
import CallToActionSection from "../../components/CallToActionSection";
import TickIcon from "./TickIcon";
import SEOHelmet from "../../components/SEOHelmet";
import seoConfig from "../../config/seo.config";
import styles from "./Classes.module.css";

const KidsClassesPage = () => {
  const { title, description, keywords, canonicalUrl, ogImage } =
    seoConfig.kidsClasses;

  const aboveTheFoldText = (
    <p>
      Equinox is a proud provider of the NSW Government's{" "}
      <a
        href="https://www.service.nsw.gov.au/active-and-creative-kids-voucher"
        target="_blank"
        aria-label="Go to Service New South Wales' 'Active and Creative Kids' page"
      >
        Active and Creative Kids program
      </a>
      .
    </p>
  );

  return (
    <>
      <SEOHelmet
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
      />

      <AboveTheFoldSection
        pageName="Kids and teens martial arts classes"
        subtext={aboveTheFoldText}
      />

      <section className={styles.classTypes}>
        <article className={styles.classType}>
          <div className={styles.inner}>
            <ImageWithLoadingSkeleton
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
                <li className={styles.benefit}>
                  <TickIcon />
                  <span className={styles.benefitText}>
                    Connect and have fun with your child
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
                Introduction to martial arts
              </h2>
              <Badge variant="outline" color="grey">
                Ages 5-6
              </Badge>
              <p className={styles.classDescription}>
                Our classes combine a variety of techniques from striking and
                grappling arts to introduce young children to the basics of
                martial arts.
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
                    Develop valuable life skills, like discipline, focus and
                    resilience
                  </span>
                </li>
              </ul>
            </div>
            <ImageWithLoadingSkeleton
              src="/images/kids-intro-roll.jpg"
              className={styles.gridImage}
            />
          </div>
        </article>

        <article className={styles.classType}>
          <div className={styles.inner}>
            <ImageWithLoadingSkeleton
              src="/images/JuJitsu-Kids.jpg"
              className={styles.gridImageCentredDown}
            />
            <div className={styles.textContainer}>
              <h2 className={styles.sectionHeading}>
                Kids Brazilian Jiu Jitsu (BJJ)
              </h2>
              <Badge variant="outline" color="grey">
                Ages 7-9
              </Badge>
              <p className={styles.classDescription}>
                Dive into the exciting world of BJJ with techniques that teach
                your child how to escape and control positions, and apply
                submissions safely.
              </p>
              <p className={styles.classDescription}>
                We make our 45-minute classes fun by running games and
                challenges that:
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
                    Develop students' physical fitness, including strength and
                    coordination
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Foster life skills like teamwork, resilience and respect for
                    others
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
                Teens Brazilian Jiu Jitsu (BJJ)
              </h2>
              <Badge variant="outline" color="grey">
                Ages 10+
              </Badge>
              <p className={styles.classDescription}>
                With a dynamic blend of self-defence and physical conditioning,
                our 1-hour classes teach teenagers important techniques of BJJ,
                also known as the "gentle art".
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
            <ImageWithLoadingSkeleton
              src="/images/James-Teens-Instructor.jpg"
              className={styles.gridImage}
            />
          </div>
        </article>

        <article className={styles.classType}>
          <div className={styles.inner}>
            <ImageWithLoadingSkeleton
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
                Our kids and teens MMA programs offer a structured approach to
                combining techniques from both striking and grappling martial
                arts.
              </p>
              <p className={styles.classDescription}>
                Catered to all skill levels, our classes (45 minutes for Kids; 1
                hour for Teens) combine skill-based drills, partner work and
                light sparring in a supervised and safe environment.
              </p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Master self-defence techniques from Muay Thai, BJJ and
                    wrestling
                  </span>
                </li>
                <li className={styles.benefit}>
                  <TickIcon size="90%" />
                  <span className={styles.benefitText}>
                    Develop strength, agility and coordination
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
                Introduce kids and teens to Muay Thai, a traditional striking
                and clinching martial art from Thailand.
              </p>
              <p className={styles.classDescription}>
                Through age-appropriate drills and exercises in our classes (45
                minutes for kids; 1 hour for teens), students learn a variety of
                standing striking techniques that incorporate punching, kicking,
                elbowing, kneeing, clinching and sweeping.
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
            <ImageWithLoadingSkeleton
              src="/images/james-kids-muay-thai.jpg"
              className={styles.gridImageCentred}
              alt="Head coach, James, holding punching pads for a young child to jab."
            />
          </div>
        </article>
      </section>

      <CallToActionSection isWhiteBg={false} />
    </>
  );
};

export default KidsClassesPage;
