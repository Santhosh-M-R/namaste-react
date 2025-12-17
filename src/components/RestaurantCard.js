import { CDN_URL } from "../utils/constants";
import { useContext } from "react";

import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { info } = props?.resCard;
  const { loggedInUser } = useContext(UserContext);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = info;
  return (
    <div className="items-center w-[250px] bg-gray-100 m-4 p-4 rounded-lg">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold text-2xl py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>User:{loggedInUser} </h4>
    </div>
  );
};

export const withVegOnlyRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="">
        <h2 className="absolute bg-green-100 p-2 rounded-2xl font-bold">
          Veg only
        </h2>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
