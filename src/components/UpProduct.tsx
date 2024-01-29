import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { slice } from "../redux/slice";
import { Link } from "react-router-dom";

interface formvalues {
  title: String;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
}
const UpdateProduct = () => {
  const form = useForm<formvalues>();
  const { register, control, handleSubmit, formState, setValue } = form;
  const { errors } = formState;
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(slice.actions.getProduct(param.productid));
  // }, []);

  const productToUpdate: any = useAppSelector(
    (data: any) => data.productToUpdate
  );
  //  console.log(productToUpdate)
  useEffect(() => {
    setValue("title", productToUpdate.title);
    setValue("description", productToUpdate.description);
    setValue("price", productToUpdate.price);
    setValue("category", productToUpdate.category);
    setValue("thumbnail", productToUpdate.thumbnail);
  }, []);
  const param = useParams();
  console.log(param.productid);

  const onSubmit = (data: formvalues) => {
    console.log("form submitted", data);
    dispatch(slice.actions.updateProduct(data));
    alert("data updated successfully");
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
          Update
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default UpdateProduct;
