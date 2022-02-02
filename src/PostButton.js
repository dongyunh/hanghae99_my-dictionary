import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createDictFB } from "./redux/modules/dict";

export default function PostButton() {
  const word = React.useRef(null);
  const exp = React.useRef(null);
  const exm = React.useRef(null);
  //   console.log(word);
  //   console.log(exp);
  //   console.log(exm);
  //   const [list, setList] = React.useState(["1번단어", "2번단어", "3번단어"]);
  //   console.log(list);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "32ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="단어"
          variant="filled"
          inputRef={word}
        />
        <TextField
          id="filled-basic"
          label="설명"
          variant="filled"
          inputRef={exp}
        />
        <TextField
          id="filled-basic"
          label="예시"
          variant="filled"
          inputRef={exm}
        />
      </Box>
      <Button
        onClick={() => {
          navigate("/");
          //   console.log(word.current.value);
          //   console.log(exp.current.value);
          //   console.log(exm.current.value);
          // dispatch(
          // createDict({
          //     word: word.current.value,
          //     exp: exp.current.value,
          //     exm: exm.current.value,
          //   })
          // );
          dispatch(
            createDictFB({
              word: word.current.value,
              exp: exp.current.value,
              exm: exm.current.value,
            })
          );
        }}
      >
        저장하기
      </Button>
    </>
  );
}

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
