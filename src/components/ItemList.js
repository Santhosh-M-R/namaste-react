import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="py-2 my-2 border-gray-300 border-b text-left"
        >
          <div className="flex justify-between">
            <div className="w-10/12">
              <div className="py-2">
                <span>{item.card.info.name} </span>
                <span>
                  - ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="w-2/12">
              <div className="absolute">
                <button className="p-2 bg-black text-white shadow-lg mx-5 rounded-lg to-50%">
                  Add +
                </button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-[200px]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
