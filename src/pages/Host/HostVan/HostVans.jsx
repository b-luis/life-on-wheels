import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import ListedVan from "../../../components/Vans/ListedVan";
import Loading from "../../../components/Layout/Loading";
import { getHostVans } from "../../../api";

const styles = {
  hostVanDiv: "px-5 py-8 flex flex-col j",
  hostVanTitle: "text-2xl font-bold",
  hostVanSection: "",
};

export const loader = () => {
  return defer({ vans: getHostVans() });
};

const HostVans = () => {
  const dataPromise = useLoaderData();

  const hostVanElements = (vans) => {
    const hostVansEls = vans.map((van) => <ListedVan key={van.id} {...van} />);
    return <section className={styles.hostVanSection}>{hostVansEls}</section>;
  };

  return (
    <div className={styles.hostVanDiv}>
      <h2 className={styles.hostVanTitle}>Your listed vans</h2>
      <Suspense fallback={<Loading />}>
        <Await resolve={dataPromise.vans}>{hostVanElements}</Await>
      </Suspense>
    </div>
  );
};

export default HostVans;
