import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CloseIcon from "@material-ui/icons/Close";
import Category from "../category/Category";
import Login from "../login";
import UserProfile from "../user-profile";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Link } from "react-router-dom";
import data from "../../products";


function Navbar(props) {
  const { cartItemsCount, isSignedIn, signIn } = props;
  const [isNavOpen, setNavOpen] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  // console.log("Navbar isSigned In", isSignedIn);
  console.log("isSignedIn ", isSignedIn);
  console.log(" Type of isSignedIn", typeof isSignedIn);

  function getUserData(key) {
    if (isSignedIn) {
      const savedData = localStorage.getItem(key);
      const userData = JSON.parse(savedData);
      return userData;
    }
  }

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    window.location = `/products/${item.id}`;
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  function MobileNav() {
    return (
      <div className="display-mobile-nav">
        <div className="mobile-nav-links">
          {isSignedIn ? (
            <UserProfile signIn={signIn} getUserData={getUserData} />
          ) : (
            ""
          )}
          <Link to="/">
            <p>Inicio</p>
          </Link>
          <Link to="/orders">
            <p>Mi orden</p>
          </Link>
          <Link to="/wishlist">
            <p>Lista</p>
          </Link>
        </div>
        <div className="close-mobile-menu" onClick={handleMobileMenu}>
          <CloseIcon />
        </div>
      </div>
    );
  }

  function handleMobileMenu() {
    setNavOpen(!isNavOpen);
  }

  return (
    <div>
      {!isNavOpen && (
        <div className="md:hidden">
          <div className="mobile-nav">
            <div className="mobile-menu" onClick={handleMobileMenu}>
              <MenuIcon />
            </div>
            <div className="mobile-logo flex items-center text-black">
              {}
              <Link to="">
                <h1 className="Logo mobile-logo">
                  CDE<span>SAS</span>
                </h1>
              </Link>
            </div>
            <div className="mobile-right-flex">
              <div className="mobile-avatar">
                {isSignedIn ? "" : <Login signIn={signIn} />}
              </div>
              <div className="mobile-cart">
                <div
                  style={{
                    position: "absolute",
                    color: "white",
                    fontSize: "0.8rem",
                    padding: "0.08rem 0.4rem",
                    borderRadius: "50%",
                    backgroundColor: "rgb(189, 153, 189)",
                    right: "8px",
                    top: "6px",
                  }}
                >
                  {cartItemsCount}
                </div>
                <Link to="/cart">
                  <ShoppingCartIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {isNavOpen && MobileNav()}

      <div className="hidden md:block desktop-nav">
        <div className="Navbar w-full p-3">
          <div className="Navbar__left">
            {/* <h1>Logo</h1> */}
            <Link to="">
              {}
              <h1 className="Logo">
                CDE<span>SAS</span>
              </h1>
            </Link>

            {}
            <h1 className="cat" onClick={() => setisVisible(!isVisible)}>
              Categorias
            </h1>
          </div>
          <div className="Navbar__right">
            <div className="search-bar">
              <ReactSearchAutocomplete
                items={data}
                maxResults={15}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                placeholder="Search for product, brands and more"
                onClear={handleOnClear}
                fuseOptions={{ keys: ["name", "description"] }} // Search in the description text as well
                styling={{
                  zIndex: 100,
                  borderRadius: "5px",
                  boxShadow: "none",
                  border: "1px solid #e5e5e5",
                  height: "5vh",
                  placeholderFontSize: "2.5vh",
                  fontSize: "2.2vh",
                }}
                className="search" // To display it on top of the search box below
              />
            </div>

            {}
            <div className="Navbar__right__right">
              {isSignedIn ? (
                <UserProfile
                  signIn={signIn}
                  getUserData={getUserData}
                  className="avatar"
                />
              ) : (
                <Login signIn={signIn} className="avatar" />
              )}
              <div className="cart">
                <div
                  style={{
                    position: "absolute",
                    color: "white",
                    fontSize: "0.8rem",
                    padding: "0.1rem 0.5rem",
                    borderRadius: "50%",
                    backgroundColor: "rgb(189, 153, 189)",
                    left: "10px",
                    top: "-15px",
                  }}
                >
                  {cartItemsCount}
                </div>
                <Link to="/cart">
                  <ShoppingCartIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {isVisible && <Category />}
      </div>
    </div>
  );
}

export default Navbar;
