import { Link, useRouteError } from "react-router-dom";
import { Button } from "@mantine/core";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import errorImage from "./error-hamster.png";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error.statusText || error.message);

  return (
    <>
      <Header />

      <main className={styles.errorPage}>
        <div className={styles.inner}>
          <div className={styles.textContainer}>
            <h1>Page not found</h1>
            <p className={styles.paragraphText}>
              The page you are trying to go to does not exist. You may have
              mistyped the address, or the page has been moved to another URL.
            </p>
            <Link to="/">
              <Button color="orange" variant="outline" radius="xl">
                Return to home page
              </Button>
            </Link>
          </div>

          <img src={errorImage} className={styles.image} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ErrorPage;
