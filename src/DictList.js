import React from "react";
import styled from "styled-components";
import CreateButton from "./CreateButton";
import { useNavigate } from "react-router-dom";
const Dictlist = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <CardsBox>
        <div>단어</div>
        <div>히힣</div>
        <div>설명</div>
        <div>히힣 웃는 것</div>
        <div>예시</div>
        <div>히힣히히히히히힣!!</div>
      </CardsBox>
      <CardsBox>단어!</CardsBox>
      <CardsBox>단어!</CardsBox>
      <CardsBox>단어!</CardsBox>
      <CardsBox>단어!</CardsBox>
      <CreateButton></CreateButton>
    </>
  );
};

export default Dictlist;

const CardsBox = styled.div`
  width: 300px;
  height: 200px;
  padding: 20px;
  background-color: #dce2f0;
  border: 2px solid #ddd;
  border-radius: 7px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;
