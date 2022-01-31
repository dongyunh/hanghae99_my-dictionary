import React from "react";
import styled from "styled-components";
import PostButton from "./PostButton";
import { useNavigate } from "react-router-dom";
const DictWriting = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <AddBox>
        <h3 style={{ fontSize: "30px" }}>단어 작성하기</h3>
        <Wrap>
          <PostButton />
        </Wrap>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          저장하기
        </Button>
      </AddBox>
    </>
  );
};

export default DictWriting;

const AddBox = styled.div`
  width: 400px;
  height: 600px;
  background-color: #dce2f0;
  color: #50586c;
  margin: 0 auto;
  text-align: center;
  border: 2px solid #ddd;
  border-radius: 7px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const Wrap = styled.div`
  display: flex;
  width: 300px;
  height: 400px;
  flex-wrap: wrap;
  /* background-color: yellow; */
  margin: auto;
  padding-top: 20px;
  text-align: center;
  align-content: space-around;
`;

const Button = styled.div`
  width: 200px;
  height: 30px;
  margin: 0 auto;
  line-height: 30px;
  background-color: rgb(80, 88, 108);
  color: rgb(220, 226, 240);
  border-radius: 9999px !important;
  cursor: pointer;
`;
