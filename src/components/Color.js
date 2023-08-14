import React from "react";

const Color = (props) => {
  const { colorData, setColor, selectedColor } = props;

  return (
    <ul className="colors ps-0">
      {colorData &&
        colorData?.map((item, index) => {
          const isSelected = item?._id === selectedColor;
          const liStyle = {
            backgroundColor: item?.title,
            borderRadius: isSelected ? "50%" : "50%", // Make it a circle
            width: isSelected ? "24px" : "20px", // Increase width for selected color
            height: isSelected ? "24px" : "20px", // Increase height for selected color
          };

          return (
            <li
              onClick={() => setColor(item?._id)}
              style={liStyle}
              key={index}
            ></li>
          );
        })}
    </ul>
  );
};

export default Color;
