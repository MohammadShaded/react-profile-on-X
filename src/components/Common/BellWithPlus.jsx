import {  FaPlus,FaRegBell } from "react-icons/fa";

const BellWithPlus = () => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <FaRegBell size={25} />
      <FaPlus 
        size={12} 
        style={{ 
          position: "absolute", 
          top: "2px", 
          right: "2px", 
          background: "black", // عشان يبين واضح
          borderRadius: "50%" 
        }} 
      />
    </div>
  );
};
export default BellWithPlus;