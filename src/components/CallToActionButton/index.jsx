import { Button } from "@mantine/core";
import PropTypes from "prop-types";

const CallToActionButton = ({
  variant = "filled",
  size = "sm",
  customCssClass = undefined,
  buttonText = "Book a free trial",
}) => {
  return (
    <a
      href="https://app.clubworx.com/websites/equinox-martial-arts-academy/waivers/trial-pass-waiver/signed_waivers/new"
      target="_blank"
      aria-label="Sign up for a free trial in a new tab"
      className={customCssClass}
      tabIndex={-1}
    >
      <Button color="orange" radius="xl" variant={variant} size={size}>
        {buttonText}
      </Button>
    </a>
  );
};

CallToActionButton.propTypes = {
  variant: PropTypes.oneOf([
    "filled",
    "light",
    "outline",
    "subtle",
    "transparent",
    "white",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  customCssClass: PropTypes.string,
  buttonText: PropTypes.string,
};

export default CallToActionButton;
