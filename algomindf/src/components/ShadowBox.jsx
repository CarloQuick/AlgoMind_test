import React from "react";

// Reference: https://github.com/btahir/next-shopify-starter/blob/main/components/ProductListings.js
// const ShadowBox = ({ children }) => {
//     return (
//         <div className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
//             <div className="flex justify-center font-concert_one h-72 border-palette-lighter relative">
//                 <div className="text-slate-600 text-xl pt-4 px-4 mt-3">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ShadowBox;

const ShadowBox = ({ onClick, children }) => {
  return (
    <div
      className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter"
      onClick={onClick}
    >
      <div className="flex justify-center font-concert_one h-72 border-palette-lighter relative">
        <div className="text-slate-600 text-xl pt-4 px-4 mt-3">{children}</div>
      </div>
    </div>
  );
};

export default ShadowBox;
