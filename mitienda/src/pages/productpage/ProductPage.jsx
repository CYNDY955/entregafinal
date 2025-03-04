import React from "react";
import "./ProductPage.css";
// import ReactImageZoom from "react-image-zoom";
import { useState } from "react";
import Navbar from "../../components/navbar";
import Truck from "./truck.png";
import Price from "./price-tag.png";
import data from "../../products";
import { useEffect } from "react";
import Posts from "./Posts.js";
import Ratings from "./rating.png";
import { Link } from "react-router-dom";
import {
  addItemToCart,
  addItemToWishlist,
  getCart,
  itemPresentInWishlist,
} from "./../../pages/cart/useLocalStorage";
import Footer from "../../components/Footer/Footer";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";

function ProductPage(props) {
  const options = ["1", "2", "3", "4", "5"];
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const { setCartItemsCount } = props;
  let id = window.location.pathname.split("/")[2];
  const {
    className,
    price,
    name,
    rating,
    image,
    review,
    discription,
    catogeries,
  } = data[id - 1];
  const [dispImg, setDispImg] = useState(image[0]);
  

  const [formData, setformData] = useState({
    text: "",
    rate: "",
  });

  const [arrData, setarrData] = useState([]);
  const [inWishList, setInWishList] = useState(itemPresentInWishlist(props.id));

  const [error, setError] = useState("");
  const [starsRating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRating(newRating);
  };

  const handleOnFormDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData((currentData) => ({ ...currentData, [name]: value }));
  };

  const increasedPrice = (str) => {
    let res = str.replace(/\D/g, "");
    return parseInt(res) * 1.25;
  };
  const decPrice = (str) => {
    let res = str.replace(/\D/g, "");
    return parseInt(res) - 40;
  };

  const handeleOnSubmit = (e) => {
    const { text, rate } = formData;

    e.preventDefault();

    

    if (!text) {
      setError("Review is required");
      return;
    }

    if (!rate) {
      setError("Rating is required");
      return;
    }

    setError("");

    setarrData((arrData) => [...arrData, { text, rate }]);

    setformData({ text: "", rate: "" });
  };

  const getDeliveryDate = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let d = new Date().getDate();
    d = parseInt(d) + Math.floor(Math.random() * 4) + 1;
    let m = new Date().getMonth();
    let a =
      d > 0
        ? ["th", "star_item", "nd", "rd"][
            (d > 3 && d < 21) || d % 10 > 3 ? 0 : d % 10
          ]
        : "";
    return `${d}${a} ${monthNames[m]}`;
  };

  const addItem = () => {
    addItemToCart({
      id,
      name,
      price,
      rating,
      discription,
      quantity: 1,
      img: image[0],
      date: getDeliveryDate(),
    });
    setItemInCart(true);
    setCartItemsCount(getCart().length);
  };

  const [itemInCart, setItemInCart] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(getCart());
    const cartItems = getCart();

    console.log("ASD", cartItems);

    cartItems.map((item) => {
      if (item.id === id) setItemInCart(true);
    });
  }, []);

  return (
    <div className="product_page_top">
      <div className="productPage__container">
        <div className="productPage__left">
          <div className="productPage__sideImagesContainer">
            {image.map((item, index) => (
              <div
                onClick={() => setDispImg(item)}
                className="sideImage"
                style={{ backgroundImage: `url(${item})` }}
              ></div>
            ))}
          </div>
          <div className="productPage__displayImageContainer">
            <div
              className="productPage__displayImage"
              style={{ backgroundImage: `url(${dispImg})` }}
            ></div>
          </div>
        </div>

        <div className="productPage__right">
          <div className="productPage__right__">
            {/* <h1>{catogeries.charAt(0).toUpperCase() + catogeries.slice(1)}</h1> */}
            <h1 className="productPage__right__name">{name}</h1>
            <h1 className="productPage__right__rating">
              <img
                className="star"
                src="https://www.google.com/imgres?q=imagen%20estrella%20peque%C3%B1a%20blanca&imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F256%2F16%2F16666.png&imgrefurl=https%3A%2F%2Fwww.flaticon.es%2Ficono-gratis%2Festrella-blanca_16666&docid=1SAyozUqfBqvsM&tbnid=palpcOddJtwMWM&vet=12ahUKEwiS9IbQz_OHAxUASzABHZMgHMQQM3oECF8QAA..i&w=256&h=256&hcb=2&ved=2ahUKEwiS9IbQz_OHAxUASzABHZMgHMQQM3oECF8QAA"
                alt=""
              />
              {rating}
            </h1>
            <div className="prod-price">
              <h1 className="productPage__right__price">{price}</h1>
              <h1 className="productPage__right__price prod-price-strike">
                ₹{increasedPrice(price)}
              </h1>
              <h1 className="productPage__right__price">( 25% OFF )</h1>
            </div>
            <h1 className="prod-taxes">inclusive of all taxes</h1>
            <div className="prodButtons">
              {itemInCart ? (
                <Link to="/cart">
                  <button className="prod-addToBag">
                    <i className="fas fa-shopping-bag btnProd-icons"></i> GO TO
                    CART BAG
                  </button>
                </Link>
              ) : (
                <button className="prod-addToBag" onClick={addItem}>
                  <i className="fas fa-shopping-bag btnProd-icons"></i> ADD TO
                  BAG
                </button>
              )}

              {!inWishList ? (
                <button
                  onClick={() => {
                    addItemToWishlist({
                      id: id,
                      name: name,
                      price: price,
                      rating: rating,
                      img: image[0],
                    });
                    setInWishList(true);
                  }}
                  className="prod-wishList"
                >
                  <i className="far fa-heart btnProd-icons"></i> WISHLIST{" "}
                </button>
              ) : (
                <button className="prod-wishList">
                  {" "}
                  <i className="far fa-heart btnProd-icons fill-heart"></i>
                  Already In Wishlist
                </button>
              )}
            </div>
            <hr />
            <div className="product-details">
              <h1 className="product-details-heading">
                PRODUCT DETAILS{" "}
                <i className="fas fa-newspaper prod-detail-icon"></i>
              </h1>
              <h3 className="productPage__right__description">{discription}</h3>
              {}
            </div>
            <br /> <br />
            <div>
              <div className="head">
                <h1 className="product-details-heading">DELIVERY OPTIONS </h1>
                <img src={Truck} alt="img" />
              </div>

              <div className="Address-address-box Address-pincode-input Address-pdp-box">
                <form>
                  {" "}
                  <input type="number" placeholder="Enter a PIN code" />
                </form>
              </div>
              <p className="sub">
                Please enter PIN code to check delivery time & Pay on Delivery
                Availability
              </p>
              <ul className="wePromise">
                <li>100% Original Products</li>
                <li>Pay on delivery might be available</li>
                <li>Easy 30 days returns and exchanges</li>
                <li>Try & Buy might be available</li>
              </ul>
              <br />
              <div className="head">
                <h1 className="product-details-heading">BEST OFFERS </h1>
                <img src={Price} alt="img" />
              </div>

              <h2 className="subH">
                <b>
                  {" "}
                  Best Price{" "}
                  <span className="offer_price">₹{decPrice(price)}</span>
                </b>
              </h2>
              <ul className="giveBullets">
                <li>
                  Applicable on: Orders above Rs. 1499 (only on first purchase)
                </li>
                <li>
                  Coupon code: <b>CDE40</b>
                </li>
                <li>
                  Coupon Discount: Rs. 40 off (check cart for final savings)
                </li>
              </ul>

              <h2 className="sub_">View Eligible Products</h2>
              <br />
              <h1 className="product-details-heading">EMI option available</h1>
              <li className="bullets">EMI starting from Rs.87/month</li>
              <h2 className="sub_">View Plan</h2>
              <br />
              <p>Product Code: 14033232</p>
              <p>
                Seller:
                <span>
                  <b>Pankaj</b>
                </span>
              </p>
              <p className="sub">View Supplier Information</p>
            </div>
            <br />
            <div className="product_reviews">
              <div className="same">
                <h1 className="product-details-heading">Ratings</h1>
                <img src={Ratings} alt="img" className="rate___" />
              </div>

              <div className="review_info">
                <div className="allRatings">
                  {rating}{" "}
                  <img
                    className="star_"
                    src="https://www.google.com/imgres?q=imagen%20estrella%20peque%C3%B1a%20blanca&imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F256%2F16%2F16666.png&imgrefurl=https%3A%2F%2Fwww.flaticon.es%2Ficono-gratis%2Festrella-blanca_16666&docid=1SAyozUqfBqvsM&tbnid=palpcOddJtwMWM&vet=12ahUKEwiS9IbQz_OHAxUASzABHZMgHMQQM3oECF8QAA..i&w=256&h=256&hcb=2&ved=2ahUKEwiS9IbQz_OHAxUASzABHZMgHMQQM3oECF8QAA"
                    alt=""
                  />
                  <p>
                    58 ratings <br />& 12 reviews
                  </p>
                </div>

                <div className="component">
                  <ul className="bargraph">
                    <div className="top_star">
                      <div class="star_item">
                        <div class="star_test">5</div>
                        <div class="star_star___">★</div>
                        <li className="top"></li>
                      </div>
                     
                      <span>68</span>
                    </div>

                    <div className="top_star">
                      <div class="star_item">
                        <div class="star_test">4</div>
                        <div class="star_star">★</div>
                        <li className="midtop"></li>
                      </div>
                      
                      <span>52</span>
                    </div>

                    <div className="top_star">
                      <div class="star_item">
                        <div class="star_test">3</div>
                        <div class="star__star">★</div>
                        <li className="neutral"></li>
                      </div>
                      
                      <span>42</span>
                    </div>

                    <div className="top_star">
                      <div class="star_item">
                        <div class="star_test">2</div>
                        <div class="star_star__">★</div>
                        <li className="midbottom"></li>
                      </div>
                     
                      <span>22</span>
                    </div>

                    <div className="top_star">
                      <div class="star_item">
                        <div class="star_test">1</div>
                        <div class="star_star_">★</div>
                        <li className="bottom"></li>
                      </div>
                     
                      <span>20</span>
                    </div>
                  </ul>
                </div>
              </div>

              <div className="form">
                {}
                <p>Share you valuable Review :</p>
                <form>
                  <input
                    className="input_text"
                    type="text"
                    value={formData.text}
                    required
                    name="text"
                    placeholder="Review"
                    onChange={handleOnFormDataChange}
                  />
                  <input
                    className="input_num"
                    type="number"
                    min="0"
                    max="5"
                    value={formData.rate}
                    required
                    name="rate"
                    placeholder="Rating"
                    onChange={handleOnFormDataChange}
                  />

                  <p>{error}</p>
                  <button
                    className="submitBtn"
                    type="submit"
                    onClick={handeleOnSubmit}
                  >
                    Post{" "}
                  </button>
                </form>
              </div>

              <div>
                <Posts post={arrData} rating={starsRating} />
                {review.map((item) => (
                  <div className="review__container">
                    <div className="review_post">
                      <h1 className="productPage__right__rating">
                        <img
                          className="star"
                          src="https://www.google.com/imgres?q=imagen%20estrella%20peque%C3%B1a%20blanca&imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F256%2F16%2F16666.png&imgrefurl=https%3A%2F%2Fwww.flaticon.es%2Ficono-gratis%2Festrella-blanca_16666&docid=1SAyozUqfBqvsM&tbnid=palpcOddJtwMWM&vet=12ahUKEwiS9IbQz_OHAxUASzABHZMgHMQQM3oECF8QAA..i&w=256&h=256&hcb=2&ved=2ahUKEwiS9IbQz_OHAxUASzABHZMgHMQQM3oECF8QAA"
                          alt=""
                        />
                        <span>{rating}</span>
                      </h1>
                      <h1 className="review__text">{item}</h1>
                    </div>
                    <div className="review__rate ">
                      <img
                        className="review__avatar"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8H1cJiq2N6D8u6lQMkP_-iPVu7d2XZbevhfUNM6obwXcUkeMDvJEsak3kTjvqAr67DDY&usqp=CAU"
                        alt=""
                      />{" "}
                      <h1>Pratyush | 7 Aug 2024 </h1>{" "}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {}
      <Footer />
    </div>
  );
}

export default ProductPage;
