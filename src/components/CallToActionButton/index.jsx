import { Button } from "@mantine/core";
import PropTypes from "prop-types";

const CallToActionButton = ({ className, isNarrowScreen=false }) => (
  <Button
    variant="filled"
    color="orange"
    radius="xl"
    className={className}
    size={isNarrowScreen ? "xs" : "md"}
  >
    {isNarrowScreen ? "Free Trial" : "Book a free trial"}
  </Button>
);

CallToActionButton.propTypes = {
  className: PropTypes.string,
  isNarrowScreen: PropTypes.bool,
};

export default CallToActionButton;
