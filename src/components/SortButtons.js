import React, { useState } from "react";

export default function SortButtons({ labels, setSelectedLabel }) {
  const [selected, setSelected] = useState(labels[0]);

  const containerStyle = {
    display: "flex",
    flexDirection: "row-reverse",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "0.7rem",
    padding: "2rem 0.5rem",
  };
  const selectedStyle = {
    margin: "auto",
    color: "#657c54",
    width: "4.8rem",
    padding: "2px 0px",
    background: "none",
    borderBottom: "3px solid #657c54",
  };
  const unselectedStyle = {
    margin: "auto",
    width: "2rem",
    fontSize: "15px",
    padding: "2px 0px",
    background: "none",
  };

  return (
    <div style={containerStyle}>
      {labels.map((label) => (
        <div
          key={label}
          style={selected == label ? selectedStyle : unselectedStyle}
          onClick={() => {
            setSelectedLabel(label);
            setSelected(label);
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
