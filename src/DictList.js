import React from "react";
import styled from "styled-components";
import CreateButton from "./CreateButton";
import { useSelector } from "react-redux";

const Dictlist = (props) => {
  const data = useSelector((state) => state.dict.list);
  console.log(data);
  return (
    <>
      {data.map((e, idx) => {
        return (
          <CardsBox key={idx}>
            <div style={{ fontSize: "23px", margin: "10px 0px" }}>단어</div>
            <span style={{ marginBottom: "10px" }}>"{e.word}"</span>
            <div style={{ fontSize: "23px", margin: "10px 0px" }}>설명</div>
            <span style={{ marginBottom: "10px" }}>"{e.exp}"</span>
            <div style={{ fontSize: "23px", margin: "10px 0px" }}>예시</div>
            <span style={{ marginBottom: "10px", color: "blue" }}>
              "{e.exm}"
            </span>
          </CardsBox>
        );
      })}

      <CreateButton></CreateButton>
    </>
  );
};

export default Dictlist;

const CardsBox = styled.div`
  width: 300px;
  height: 220px;
  padding: 20px;
  background-color: #dce2f0;
  border: 2px solid #ddd;
  border-radius: 7px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;
