import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div className="grid h-[90vh] place-content-center px-4 ">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200 ">404</h1>

        <p className="text-2xl font-bold tracking-tight sm:text-4xl dark:text-white">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          We can&apos;t find that page.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded bg-[#f0c14b]
          px-5 py-3 text-sm font-medium text-white hover:bg-[#f0c14b]/200 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
