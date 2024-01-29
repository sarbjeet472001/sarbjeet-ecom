import React from 'react'
import { useAppSelector } from '../redux/store'
import ProductCard from './ProductCard';

const Addproduct = () => {
  const cartproducts:any =useAppSelector((data:any)=>data.cartProducts);
  console.log(cartproducts)
  return (
    <div className="container">
      <div className="row">
        {cartproducts.length ? (
          cartproducts.map((item: any) => {
            return (
              <div className="col-md-4">
                <ProductCard
                  id={item[0].id}
                  image={item[0].thumbnail}
                  title={item[0].title}
                  description={item[0].description}
                  category={item[0].category}
                  price={item[0].price}
                />
              </div>
            );
          })
        ) : (
          <h1>pls add item to cart</h1>
        )}
      </div>
    </div>
  );
}

export default Addproduct