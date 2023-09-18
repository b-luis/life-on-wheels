import React from "react";
import VanType from "../Filter/VanType";
import VanItem from "../VanItem/VanItem";
import { useEffect, useState, useRef } from "react";

const styles = {
  vanSection: "px-6 py-[45px]",
  vanTitle: "font-semibold text-xl lg:text-2xl",
  vanDiv: "flex flex-row flex-wrap justify-between",
  detailsDiv: "",
  vanName: "",
  vanPrice: "",
};

const VanPage = () => {
  const [vanData, setVanData] = useState([]);
  const firstRender = useRef(true);

  if (firstRender) {
    useEffect(() => {
      {
        fetch("api/vans")
          .then((res) => res.json())
          .then((data) => setVanData(data.vans));
      }
    }, []);
  }

  return (
    <section className={styles.vanSection}>
      <h2 className={styles.vanTitle}>Explore our vans options</h2>
      <div className={styles.vanDiv}>
        {vanData.map((data) => (
          <VanItem {...data} />
        ))}
      </div>
    </section>
  );
};

export default VanPage;