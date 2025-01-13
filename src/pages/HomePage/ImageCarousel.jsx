import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import ImageWithLoadingSkeleton from "../../components/ImageWithLoadingSkeleton";
import styles from "./HomePage.module.css";

const ImageCarousel = () => {
  const IMAGES_PATHS_PREFIX = "/images/banner";
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const imagePaths = [];
  for (let imageSuffix = 1; imageSuffix <= 3; imageSuffix++)
    imagePaths.push(`${IMAGES_PATHS_PREFIX}/banner${imageSuffix}.jpg`);

  return (
    <article className={styles.carouselContainer}>
      <Carousel
        loop
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {imagePaths.map((path) => (
          <Carousel.Slide key={path}>
            <ImageWithLoadingSkeleton
              src={path}
              className={styles.carouselImage}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </article>
  );
};

export default ImageCarousel;
