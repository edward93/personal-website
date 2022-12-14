import { useRouteError } from "react-router-dom";
import { useDocumentTitle } from "../../utilities/setDocumentTitle";

export default function ErrorPage() {
  // ignore the returned values since we don't need to update it programmatically
  useDocumentTitle("ERROR");
  
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div className="pw-404-error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <i>{error.statusText || error.message}</i>
    </div>
  );
}
