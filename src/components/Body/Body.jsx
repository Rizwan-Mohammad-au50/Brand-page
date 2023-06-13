import styles from "./Body.module.css";
import "../../../src/App.css";

const Body = () => {
  // console.log(styles);

  return (
    <div className={styles.container}>
      <div className={styles.leftside}>
        <div>
          <h1>YOUR FEET DESERVE THE BEST</h1>
        </div>
        <div>
          <p className={styles.paraOne}>
            YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>
        </div>
        <div className={styles.btns}>
          <button className={styles.shopnow_btn}>Shop Now</button>
          <button className={styles.category_btn}>Category</button>
        </div>
        <p className={styles.paraTwo}>Also Availabe On</p>
        <div className={styles.amazon_flipkart_logos}>
          <img src="images/amazon_logo.png" alt="" />
          <img src="images/flipkart_logo.png" alt="" />
        </div>
      </div>

      <div className="rightside">
        <img
          className={styles.shoe_image}
          src="images/shoe_image.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Body;
