import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error.statusText || error.message);

  return <></>;
};

export default ErrorPage;
