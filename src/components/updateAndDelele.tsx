import React from 'react'
import { useAppSelector,useAppDispatch} from '../redux/store';
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'
import { slice } from '../redux/slice';
import { useNavigate } from 'react-router-dom';


const UpdateAndDelele = () => {
     const productData: any = useAppSelector((data: any) => data.products);
    //  console.log(productData)
    const dispatch=useAppDispatch();
    const navigate=useNavigate();
    
const updateProductHandler =(param:any)=>{
    dispatch(slice.actions.getProduct(param));
    navigate(`/updateproduct/${param}`);
}





  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Delete</th>
            <th scope="col">edit</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((item: any) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td
                  onClick={() => dispatch(slice.actions.deleteProduct(item.id))}
                >
                  <AiFillDelete />
                </td>
                <td onClick={()=>updateProductHandler(item.id)}>
                  <AiFillEdit />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UpdateAndDelele