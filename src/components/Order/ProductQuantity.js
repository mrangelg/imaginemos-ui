import React from "react";
import styled from "styled-components";
import UserIcon from "./../../assets/icons/user.svg";

const ContainerDisplay = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ItemAmount = styled.div`
  background-color: #ffd644;
  border-radius: 0.3125rem;
  padding: 0.3125rem 0.625rem;
  text-align: center;
  margin-left: 1.25rem;
`;

function ProductQuantity({ productQuantity }) {
  return (
    <ContainerDisplay>
      <UserIcon width="20px" />
      <ItemAmount>{productQuantity}</ItemAmount>
    </ContainerDisplay>
  );
}
export default ProductQuantity;
