import React from "react";
import { Wrapper } from "./styles";
import styled from "styled-components";

export default function Navbar({ items, selected, setSelected }) {
  const Item = styled.div`
    ${({ isSelected }) =>
      isSelected &&
      `
        color: #99b882;
        border-bottom: 2.5px solid #99b882;
    `}
  `;
  const Icon = styled.img`
    width: 25px;
    height: 25px;
    align-self: center;
  `;

  const handleChange = (name) => {
    setSelected(name);
  };

  return (
    <Wrapper>
      {items.map((item) => (
        <div
          style={{ display: "inline", textAlign: "center" }}
          onClick={() => handleChange(item.id)}
        >
          <Icon src={item.icon} />
          <Item isSelected={selected == item.id}>{item.heb}</Item>
        </div>
      ))}
    </Wrapper>
  );
}