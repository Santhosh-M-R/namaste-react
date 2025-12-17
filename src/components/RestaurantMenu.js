import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { id } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const res = useRestaurantMenu(id);

  if (res === null) {
    return <Shimmer />;
  }

  // restaurant menu
  const { name, cuisines, costForTwoMessage } = res.cards[2]?.card?.card?.info;
  //   console.log(res.cards[2]?.card?.card?.info);

  // categories cards of menu
  const categoriesCards =
    res.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (cards) =>
        cards?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">Restaurant Name: {name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categoriesCards.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(showIndex == index ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
