import { useState } from "react";
import PropTypes from "prop-types";
import { Skeleton } from "@mantine/core";

const ImageWithLoadingSkeleton = ({ src, className = undefined, alt = "" }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Skeleton visible={isLoading} radius="lg" height="100%">
      <img
        src={src}
        onLoad={() => setIsLoading(false)}
        className={className}
        alt={alt}
      />
    </Skeleton>
  );
};

ImageWithLoadingSkeleton.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageWithLoadingSkeleton;
