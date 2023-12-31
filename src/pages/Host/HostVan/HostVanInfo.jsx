import React, { useContext } from "react";
import { useParams, useOutletContext } from "react-router-dom";

const styles = {
  vanDetails: "py-1 lg:text-lg",
  vanSpan: "font-semibold",
};

const HostVanInfo = () => {
  const { vanData } = useOutletContext();
  return (
    <>
      {vanData ? (
        <div>
          <h3 className={styles.vanDetails}>
            <span className={styles.vanSpan}>Name: </span>
            {vanData.name}
          </h3>
          <h3 className={styles.vanDetails}>
            <span className={styles.vanSpan}>Category: </span>
            {vanData.type[0].toUpperCase() + vanData.type.slice(1)}
          </h3>
          <h3 className={styles.vanDetails}>
            <span className={styles.vanSpan}>Description: </span>
            {vanData.description}
          </h3>
          <h3 className={styles.vanDetails}>
            <span className={styles.vanSpan}>Visibility: </span>
            Public
          </h3>
        </div>
      ) : (
        <h2 className="fetch-data">Fetching data...</h2>
      )}
    </>
  );
};

export default HostVanInfo;
