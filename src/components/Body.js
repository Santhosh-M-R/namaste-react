import RestaurantCard, { withVegOnlyRestaurantCard } from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
// react hook
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const isOnline = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  console.log("isOnline", isOnline);

  const RestaurantWithVegOnly = withVegOnlyRestaurantCard(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // swiggy API have some issue so using inhouse API
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(
      "data",
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (!isOnline) {
    return <h1>You're offline</h1>;
  }

  return !listOfRestaurants ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter m-4">
        <div className="search gap-4 flex">
          <input
            id="search"
            type="text"
            className="search-box border p-1"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-gray-200 cursor-pointer rounded-lg"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchValue.toLocaleLowerCase())
              );

              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
          <button
            className="filter-btn bg-green-300 cursor-pointer rounded-lg px-4 py-2"
            onClick={() => {
              const filteredlist = listOfRestaurants.filter(
                (res) => res.info.avgRatingString > 4.5
              );
              setFilteredRestaurants(filteredlist);
              console.log(filteredlist);
            }}
          >
            Top Rated Restaurant
          </button>
          <input
            className="border p-1 rounded"
            type="search"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurants.map((restarant) => (
          <Link
            to={"/restaurant/" + restarant?.info?.id}
            key={restarant?.info?.id}
          >
            {restarant.info.veg ? (
              <RestaurantWithVegOnly resCard={restarant} />
            ) : (
              <RestaurantCard resCard={restarant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
