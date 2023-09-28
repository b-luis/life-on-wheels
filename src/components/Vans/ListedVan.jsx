import React from "react";
import { Link } from "react-router-dom";

const styles = {
  listedVanDiv: "flex bg-white rounded-md p-5 my-4",
  listedVanImg: "max-w-[80px] lg:max-w-[130px] rounded-sm",
  listedVanDetails: "flex flex-col justify-center px-5",
  listedVanPrice: "text-sm lg:text-lg",
  listedVanName: "font-semibold lg:text-xl",
  listedVanLink: "mx-auto lg:max-w-[500px] ",
};

const ListedVan = ({ id, imageUrl, name, price }) => {
  return (
    <div className={styles.listedVanLink}>
      {/** passing th eucrrent typefilter to the next route */}
      <Link to={id}>
        <div className={styles.listedVanDiv}>
          <img className={styles.listedVanImg} src={imageUrl} alt="van image" />
          <div className={styles.listedVanDetails}>
            <h4 className={styles.listedVanName}>{name}</h4>
            <p className={styles.listedVanPrice}>${price}/day</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListedVan;
