import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { Badge, Button } from "@mantine/core";
import {
  IconChartArrows,
  IconHomeHeart,
  IconSchool,
} from "@tabler/icons-react";
import ImageWithLoadingSkeleton from "../../components/ImageWithLoadingSkeleton";
import CallToActionButton from "../../components/CallToActionButton";
import ImageCarousel from "./ImageCarousel";
import bannerImage from "/images/banner/banner.jpg";
import styles from "./HomePage.module.css";
import CallToActionSection from "../../components/CallToActionSection";

const REASONS_DATA = [
  {
    label: "Safe and supportive environment",
    description:
      "We ensure an inclusive environment that helps make everyone feel at home - whether it is your first class ever, or you are already a seasoned martial artist.",
    icon: <IconHomeHeart size="100%" />,
  },

  {
    label: "Expert and experienced instructors",
    description:
      "Learn from our passionate and experienced instructors, dedicated to helping you achieve your individual goals on your martial arts journey.",
    icon: <IconSchool size="100%" />,
  },

  {
    label: "Tailored classes for all levels",
    description:
      "We offer classes designed for every skill level, age, and goal. No matter where you're starting, you'll find a curriculum that feels tailored to you.",
    icon: <IconChartArrows size="100%" />,
  },
];

const CLASSES_DATA = [
  {
    label: "Kids",
    description:
      "Help your child (ages 3+) build confidence, discipline and teamwork in a safe and fun environment with expert instructors.",
    path: "/kids-classes",
    imagePath: "/icons/kids.webp",
  },

  {
    label: "Adults",
    description:
      "Elevate your fitness, focus and self-defence skills through our dynamic training programs - perfect for beginners and experienced martial artists alike.",
    path: "/adults-classes",
    imagePath: "/icons/seated-male-in-gi.webp",
  },

  {
    label: "Girls and Women",
    description:
      "Step into a space built for women, by women. Build confidence, learn self-defence and achieve your fitness goals in a safe space designed for you.",
    path: "/womens-classes",
    imagePath: "/icons/woman.jpg",
  },
];

const HomePage = () => {
  const isNarrowScreen = useMediaQuery("(max-width: 869px)");

  const classesCards = CLASSES_DATA.map((classObject) => (
    <article className={styles.card} key={classObject.label}>
      <ImageWithLoadingSkeleton
        src={classObject.imagePath}
        className={styles.cardImage}
      />

      <h2 className={styles.cardHeading}>{classObject.label}</h2>

      <p className={styles.classDescription}>{classObject.description}</p>

      <Link
        to={classObject.path}
        aria-label={`Go to ${classObject.label} classes' page`}
        tabIndex={-1}
      >
        <Button variant="outline" color="#e36802" radius="xl" mt="xs">
          Learn more
        </Button>
      </Link>
    </article>
  ));

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.textContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroHeading}>
              A martial arts academy for{" "}
              <span className={styles.underlinedText}>everyone</span>
            </h1>
            <div className={styles.subtextContainer}>
              <p>
                No matter your age, gender or previous experience in martial
                arts, Equinox is here for you!
              </p>
              <p>
                Supported by a vibrant community of students and parents, we
                foster a safe and supportive environment where everyone can
                grow, learn and excel in martial arts.
              </p>
            </div>

            <CallToActionButton size="md" />
          </div>
        </div>

        {isNarrowScreen ? (
          <ImageCarousel />
        ) : (
          <ImageWithLoadingSkeleton
            src={bannerImage}
            className={styles.heroImage}
          />
        )}
      </section>

      <section className={styles.classes}>
        <div className={styles.top}>
          <Badge size="md" variant="white" color="grey">
            Our classes
          </Badge>
          <h1 className={styles.sectionHeading}>
            Tailored martial arts classes for every age and experience level
          </h1>
        </div>
        <div className={styles.classesGrid}>{classesCards}</div>
      </section>

      <section className={styles.whyChooseUs}>
        <div className={styles.whyChooseUsInner}>
          <div className={styles.top}>
            <Badge size="md" variant="transparent" color="grey">
              Why choose us
            </Badge>
            <h1 className={styles.sectionHeading}>Why train at Equinox?</h1>
          </div>
          <div className={styles.reasonsGrid}>
            <ImageWithLoadingSkeleton
              src="/images/rolling.JPEG"
              alt="Brazilian Jiujitsu in the traditional gi"
              className={styles.reasonsImage}
            />
            <div className={styles.right}>
              {REASONS_DATA.map((reasonObject) => (
                <div className={styles.reason} key={reasonObject.label}>
                  <figure className={styles.reasonIcon}>
                    {reasonObject.icon}
                  </figure>
                  <div className={styles.reasonText}>
                    <h3 className={styles.reasonTitle}>{reasonObject.label}</h3>
                    <p className={styles.paragraphText}>
                      {reasonObject.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection isWhiteBg={false} />
    </>
  );
};

export default HomePage;
