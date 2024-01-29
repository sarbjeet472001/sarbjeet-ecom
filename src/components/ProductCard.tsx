import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { slice } from "../redux/slice";

interface Props {
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
  id: number;
}
const ProductCard = ({
  image,
  title,
  description,
  price,
  category,
  id,
}: Props) => {
  const dispatch = useAppDispatch();
  const handleaddtocart = () => {
    dispatch(slice.actions.addToCart(id));
    alert(`${title} added to cart`);
  };
  return (
    <div className="g-col-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div style={{ display: "flex" }}>
            <span>
              <b>Price:</b>
              {price}
            </span>
          </div>
          <span>
            <b>Category:</b>
            {category}
          </span>
        </div>
        <Link to="#" onClick={handleaddtocart} className="btn btn-primary">
          Add To Cart
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
