import { NavLink } from "react-router-dom";

const styles = {
  itemContainer: "xs:max-w-[45%] lg:max-w-[30%] mt-10",
  img: "rounded-md",
  itemDiv: "flex justify-between",
  text: "font-semibold py-3 md:text-xl lg:text-2xl",
  small: "block text-xs",
};

const VanItem = ({ id, name, imageUrl, type, price }) => {
  const upperCaseType = type[0].toUpperCase() + type.slice(1);
  return (
    <div key={id} className={styles.itemContainer}>
      <NavLink to={`/vans/${id}`}>
        <img className={styles.img} src={imageUrl} />
        <div className={styles.itemDiv}>
          <div className="">
            <h4 className={styles.text}>{name}</h4>
            <i className={`vantype ${type} selected`}>{upperCaseType}</i>
          </div>
          <h4 className={styles.text}>
            ${price}
            <small className={styles.small}>/day</small>
          </h4>
        </div>
      </NavLink>
    </div>
  );
};

export default VanItem;