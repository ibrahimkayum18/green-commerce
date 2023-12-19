import axios from "axios";
import { useEffect, useState } from "react";
import CollectionCart from "../../../Components/CollectionCart";

const Collections = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    axios.get("./../../../../public/clothes.json").then((res) => {
      setClothes(res.data);
    });
  }, []);

  return (
    <div className="my-10">
      <div className="text-center">
        <h2 className="text-5xl font-semibold py-3">
          Green Commerces Collections
        </h2>
        <p className="w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          doloremque quis quam, necessitatibus ex alias hic earum consequuntur
          magnam odio?
        </p>
      </div>
      <div className="divider"></div>
      <div className="px-10">
      <h2 className="py-3 text-2xl font-bold">Clothes-</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {
            clothes.map((cloth, index) => <CollectionCart key={index} item={cloth}></CollectionCart>)
        }
      </div>
      </div>
    </div>
  );
};

export default Collections;
