import { FaCartPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const WishListItem = ({item}) => {
 
  
  
  return (
    <tr className="">
      <th className="flex gap-2 items-center">
        <img className="w-16 h-16 object-cover" src={item.image} alt="" />
        <p className="text-black/60">{item.name}</p>
      </th>
      <td>${item.currentPrice}</td>
    
      
      <td className="text-right min-h-full items-center ">
        <div className="flex gap-5 justify-end">
         
          <button className="btn  btn-primary  btn-sm"> <FaCartPlus /> Move to Cart</button>
          <button className="btn btn-error text-white btn-sm"> <RiDeleteBin6Line /> Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default WishListItem;
