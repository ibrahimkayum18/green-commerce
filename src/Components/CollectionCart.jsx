import { Link } from "react-router-dom";

const CollectionCart = ({ item }) => {
  console.log(item);
  return (
    <Link to={`/details`}>
      <div className="border p-5">
        <img className="w-full h-52" src={item.image} alt="" />
        <div>
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p className="">Price: ${item.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCart;
