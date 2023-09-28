import VanItem from "../../components/Vans/VanItem";
import Loading from "../../components/Layout/Loading";
import { getVans } from "../../api";
import { useState, Suspense } from "react";
import { useSearchParams, useLoaderData, defer, Await } from "react-router-dom";

const styles = {
  vanSection: "px-6 py-[50px]",
  vanTitle: "font-semibold text-xl flex-row lg:text-2xl",
  vanDiv: "flex gap-10 flex-wrap justify-center",
  vanNav: "flex gap-2 py-5",
};

// Define a loader function that fetches van data using a Promise
export const loader = () => {
  const getVansPromise = getVans();
  return defer({ vans: getVansPromise });
};

const Van = () => {
  // Get and set URL search parameters
  const [searchParams, setSearchParams] = useSearchParams();

  // State to handle errors
  const [error, setError] = useState(null);

  // Get the 'type' filter from URL search parameters
  const typeFilter = searchParams.get("type");

  // Access the loader data (returns an object with a Promise)
  const dataPromise = useLoaderData();

  // Handle errors by rendering an error message
  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  // Function to render van elements based on the filter
  const renderElements = (vans) => {
    const displayedVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;

    const vanElements = displayedVans.map((data) => (
      <VanItem key={data.id} searchParams={searchParams} {...data} />
    ));

    return (
      <>
        <nav className={styles.vanNav}>
          <button
            className={`van-type simple ${
              typeFilter === "simple" ? "selected" : null
            }`}
            onClick={() => setSearchParams({ type: "simple" })}
          >
            Simple
          </button>
          <button
            className={`van-type rugged ${
              typeFilter === "rugged" ? "selected" : null
            }`}
            onClick={() => setSearchParams({ type: "rugged" })}
          >
            Rugged
          </button>
          <button
            className={`van-type luxury ${
              typeFilter === "luxury" ? "selected" : null
            }`}
            onClick={() => setSearchParams({ type: "luxury" })}
          >
            Luxury
          </button>
          {typeFilter ? (
            <button
              className="van-type clear-filters"
              onClick={() => setSearchParams({})}
            >
              Clear
            </button>
          ) : null}
        </nav>
        <div className={styles.vanDiv}>{vanElements}</div>
      </>
    );
  };

  return (
    <section className={styles.vanSection}>
      <h2 className={styles.vanTitle}>Explore our vans options</h2>
      {/* Use Suspense to show a loading spinner while waiting for data */}
      <Suspense fallback={<Loading />}>
        {/* Use Await to resolve the data Promise and call renderElements */}
        <Await resolve={dataPromise.vans}>{renderElements}</Await>
      </Suspense>
    </section>
  );
};

export default Van;
