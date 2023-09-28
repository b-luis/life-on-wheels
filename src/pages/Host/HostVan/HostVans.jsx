import { useState, useEffect, useRef } from "react";
import ListedVan from "../../../components/Vans/ListedVan";
import Loading from "../../../components/Layout/Loading";

const styles = {
  hostVanDiv: "px-5 py-8 flex flex-col j",
  hostVanTitle: "text-2xl font-bold",
  hostVanSection: "",
};

const HostVans = () => {
  const [hostVan, setHostVan] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => {
        setHostVan(data.vans);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.hostVanDiv}>
      <h2 className={styles.hostVanTitle}>Your listed vans</h2>
      <section className={styles.hostVanSection}>
        {hostVan.map((van) => (
          <ListedVan key={van.id} {...van} />
        ))}
      </section>
    </div>
  );
};

export default HostVans;
