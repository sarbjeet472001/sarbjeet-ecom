import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useAppDispatch } from "../redux/store";
import { slice } from "../redux/slice";
import UpdateAndDelele from "./updateAndDelele";
import { Link } from "react-router-dom";

interface formvalues {
  title: String;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
}
const Admin = () => {
  const form = useForm<formvalues>();
  const { register, control, handleSubmit, formState, setValue } = form;
  const { errors } = formState;
  const dispatch = useAppDispatch();

  const onSubmit = (data: formvalues) => {
    console.log("form submitted", data);
    dispatch(slice.actions.addProduct(data));
    alert("Product added successfully");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Product Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            {...register("title", {
              required: {
                value: true,
                message: "title is required",
              },
            })}
          />
          <p className="text-danger">{errors.title?.message}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            aria-describedby="emailHelp"
            {...register("description", {
              required: { message: "description is required", value: true },
            })}
          />
          <p className="text-danger">{errors.description?.message}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            aria-describedby="emailHelp"
            {...register("price", {
              required: {
                value: true,
                message: "price is required",
              },
              min: { value: 1, message: "price must be a positive value" },
              maxLength: {
                value: 7,
                message: "price cant be a very large value",
              },
            })}
          />
          <p className="text-danger">{errors.price?.message}</p>
        </div>

        <div className="mb-3">
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
            <ul
              className="dropdown-menu"
              id="drop-menu"
              {...register("category")}
            >
              <li>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => setValue("category", "smartphones")}
                >
                  smartphones
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => setValue("category", "laptops")}
                >
                  laptops
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => setValue("category", "fragrances")}
                >
                  fragrances
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => setValue("category", "skincare")}
                >
                  skincare
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => setValue("category", "groceries")}
                >
                  groceries
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => setValue("category", "home-decoration")}
                >
                  home-decoration
                </Link>
              </li>
            </ul>
          </li>
        </div>

        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">
            thumbnail
          </label>
          <input
            type="text"
            className="form-control"
            id="thumbnail"
            aria-describedby="emailHelp"
            {...register("thumbnail", {
              required: { message: "thumbnail is required", value: true },
            })}
          />
          <p className="text-danger">{errors.thumbnail?.message}</p>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
      <DevTool control={control} />
      <div>
        <UpdateAndDelele />
      </div>
    </div>
  );
};

export default Admin;
