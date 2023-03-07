import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex justify-center items-center h-screen">
      <h1 className="text-2xl text-red-500">Oops!</h1>
      <p className="text-xl text-red-500">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-red-500">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}