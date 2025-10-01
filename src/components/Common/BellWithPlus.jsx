import {  FaPlus,FaRegBell } from "react-icons/fa";

const BellWithPlus = ({className}) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <FaRegBell className={className} />
      <FaPlus 
        className={className+' plus-icon'}
        style={{ 
          position: "absolute", 
          top: "2px", 
          right: "2px", 
          background: "black",
          borderRadius: "50%" 
        }} 
      />
    </div>
  );
};
export default BellWithPlus;