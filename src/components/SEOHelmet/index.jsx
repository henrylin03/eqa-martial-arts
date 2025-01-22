import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SEOHelmet = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://i.imgur.com/h8XN23j.jpeg",
  ogType = "website",
}) => {
  const fullTitle = title
    ? `${title} | Equinox Academy`
    : "Equinox Academy | Martial Arts Classes in Chatswood";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Henry Lin" />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

SEOHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  canonicalUrl: PropTypes.string.isRequired,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
};

export default SEOHelmet;
