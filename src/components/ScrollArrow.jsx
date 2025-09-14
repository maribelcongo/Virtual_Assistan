import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

const ScrollArrow = ({ targetPath }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(targetPath); // cambia de página
  };

  return (
    <div className="scroll-down">
      <button className="scroll-down-button" onClick={handleClick}>
        <FaArrowDown />
      </button>
    </div>
  );
};

export default ScrollArrow;
