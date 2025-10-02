import {  FaPlus,FaRegBell } from "react-icons/fa";
// import ''
const BellWithPlus = ({className}) => {
  return (
    <div className="bell-plus-root" style={{ position: "relative", display: "inline-block" }}>
      <FaRegBell className={className} />
      <FaPlus 
        className={className+' plus-icon'}
      />
    </div>
  );
};
export default BellWithPlus;