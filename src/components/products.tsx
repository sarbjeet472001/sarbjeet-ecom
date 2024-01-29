import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../model";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { slice } from "../redux/slice";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useAppDispatch();

  const productData: any = useAppSelector((data: any) => data.products);
  const retain: any = useAppSelector((data: any) => data.shouldRetain);
  console.log(productData);

  const cdm = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    dispatch(slice.actions.getdata(data.products));
  };

  useEffect(() => {
    if (!retain) {
      console.log("use Effect");
      cdm();
    }
  }, []);

  const handlePrice = () => {
    dispatch(slice.actions.filterPrice(productData));
  };

  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={handlePrice}>Price</button>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link
                  onClick={() =>
                    dispatch(slice.actions.filtercategory("smartphones"))
                  }
                  className="dropdown-item"
                  to="#"
                >
                  smartphones
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() =>
                    dispatch(slice.actions.filtercategory("laptops"))
                  }
                >
                  laptops
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() =>
                    dispatch(slice.actions.filtercategory("fragrances"))
                  }
                >
                  fragrances
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() =>
                    dispatch(slice.actions.filtercategory("skincare"))
                  }
                >
                  skincare
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() =>
                    dispatch(slice.actions.filtercategory("groceries"))
                  }
                >
                  groceries
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() =>
                    dispatch(slice.actions.filtercategory("home-decoration"))
                  }
                >
                  home-decoration
                </Link>
              </li>
            </ul>
          </li>
        </div>
      </div>
      <div className="row">
        {productData?.length ? (
          productData.map((item: Product) => {
            return (
              <div key={Math.random()} className="col-md-4">
                <ProductCard
                  id={item.id}
                  image={item.thumbnail}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  price={item.price}
                />
              </div>
            );
          })
        ) : (
          <h1>No product of this category</h1>
        )}
      </div>
    </div>
  );
};

export default Products;
