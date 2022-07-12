import React from "react";
import SoapProducts from "./SoapProducts";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import "../layout/styles.css";

const SoapInfo = () => {
  return <div>Soap INFO</div>;
};

export default SoapInfo;

// return (
//   <div>
//     {SoapProducts.maps((product) => {
//       return (
//         <div>
//           <img src={product.image} alt={product.title} />
//           <div>
//             <h1>{product.title}</h1>
//             <div>
//               {product.description}
//               {product.ingredients}
//               {product.price}
//             </div>
//             <div>
//               {/* <Link to="/soaplist">Back</Link> */}
//               <button className="card-btn card-btn-buy">
//                 <ShoppingCartIcon className="card-icon" />
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// );
