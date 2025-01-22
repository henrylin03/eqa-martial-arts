import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { Button } from "@mantine/core";
import {
  IconChartArrows,
  IconHomeHeart,
  IconSchool,
} from "@tabler/icons-react";

import ImageWithLoadingSkeleton from "../../components/ImageWithLoadingSkeleton";
import CallToActionButton from "../../components/CallToActionButton";
import CallToActionSection from "../../components/CallToActionSection";
import ImageCarousel from "./ImageCarousel";

import SEOHelmet from "../../components/SEOHelmet";
import seoConfig from "../../config/seo.config";

import bannerImage from "/images/banner/banner.jpg";
import styles from "./HomePage.module.css";

const CLASSES_DATA = [
  {
    label: "Kids and Teens",
    description:
      "Help your child (ages 3+) build confidence and discipline in a safe and fun environment.",
    path: "/kids-classes",
    imagePath: "/icons/kids.webp",
    buttonLabel: "kids",
  },

  {
    label: "Adults",
    description:
      "Elevate your fitness, focus and self-defence skills – perfect for beginners and experienced martial artists alike.",
    path: "/adults-classes",
    imagePath: "/icons/seated-male-in-gi.webp",
    buttonLabel: "adults",
  },

  {
    label: "Girls and Women",
    description:
      "Build confidence and learn self-defence in a safe space designed for women, by women.",
    path: "/womens-classes",
    imagePath: "/icons/woman.jpg",
    buttonLabel: "women's",
  },
];

const REASONS_DATA = [
  {
    label: "Safe and supportive environment",
    description:
      "Whether it’s your first class or you’re a seasoned martial artist, our inclusive environment will help you feel at home.",
    icon: <IconHomeHeart size="100%" />,
  },

  {
    label: "Expert and experienced instructors",
    description:
      "Learn from our passionate and experienced coaches, dedicated to helping you achieve your goals on your martial arts journey.",
    icon: <IconSchool size="100%" />,
  },

  {
    label: "Tailored classes for all levels",
    description:
      "We offer classes designed for every skill level, age, and goal. No matter where you're starting, you'll find a curriculum that suits you.",
    icon: <IconChartArrows size="100%" />,
  },
];

const HomePage = () => {
  const isNarrowScreen = useMediaQuery("(max-width: 869px)");
  const { title, description, keywords, canonicalUrl } = seoConfig.home;

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
          Explore {classObject.buttonLabel} classes
        </Button>
      </Link>
    </article>
  ));

  return (
    <>
      <SEOHelmet
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
      />

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
                arts, Equinox is here for you.
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
        <h1 className={styles.sectionHeading}>
          Martial arts classes in Chatswood
        </h1>
        <div className={styles.classesGrid}>{classesCards}</div>
      </section>

      <section className={styles.whyChooseUs}>
        <div className={styles.whyChooseUsInner}>
          <h1 className={styles.sectionHeading}>Why train at Equinox?</h1>
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
