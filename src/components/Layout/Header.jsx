import Button from "../Button";
import imageUrl from "../../assets/picdit-logo-wide.png";
import { Link, useNavigate, createSearchParams } from "react-router";
import { useDispatch } from "react-redux";
import { setActive } from "../../features/menuSlices/activeSlice";
import { useState } from "react";
import { fetchSearch } from "../../features/menuSlices/searchSlice";
import {useToast} from '../ToastNotification/ToastProvider'

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const {addToast} = useToast()

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(setActive("search"));


    // creates search params. /search?q=blablabla
    // and also navigates it to the new page, where the dispatch happens
    navigate({
      pathname: "/search",
      search: createSearchParams({
        q: searchQuery,
      }).toString(),
    });


  }

  const dispatch = useDispatch();
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={imageUrl} alt="picdit logo" />
        </Link>
      </div>
      <form action="" onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="search">
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={handleChange}
          />
          <Button type="submit" className="search-btn" disabled={searchQuery.length < 1}>
            Search
          </Button>
        </label>
      </form>
      <div className="header-button-container">
            {/* <Button className="login-btn" >Log in</Button>
        <Button className="signup-btn" >Sign up</Button> */}
        <Button className="login-btn" onClick={() => {addToast("You can't use this button in this demo", "neutral" )}}>Log in</Button>
        <Button className="signup-btn" onClick={() => {addToast("You can't use this button in this demo", "neutral" )}} >Sign up</Button>
      </div>
    </header>
  );
}

export default Header;
