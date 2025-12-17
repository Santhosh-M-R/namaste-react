import { useEffect, useState } from "react";
const useRestaurantMenu = (id) => {
  const [res, setRes] = useState(null);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/" + id
    );

    const json = await data.json();
    console.log(
      "santhosh",
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
    );
    const filteredCards =
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (cards) =>
          cards?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    console.log("filteredCards", filteredCards);
    setRes(json.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return res;
};

export default useRestaurantMenu;
