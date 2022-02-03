import React from "react";
import Dictlist from "./DictList";
import DictWriting from "./DictWriting";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDictFB } from "./redux/modules/dict";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadDictFB());
  }, []);
  return (
    <div className="App">
      <NavBar>My Dictionary</NavBar>
      <Line />
      <Container>
        <Routes>
          <Route path="/" element={<Dictlist />} />
          <Route path="/write" element={<DictWriting />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  background-color: #eee;
  max-width: 1300px;
  height: 100%;
  min-height: 800px;
  display: flex;
  padding: 50px 0px;
  margin: auto;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap: 20px;
  font-family: ‘Palatino Linotype’, ‘Book Antiqua’, Palatino, serif;
  color: #50586c;
  font-weight: bold;
`;

const NavBar = styled.div`
  max-width: 1300px;
  margin: auto;
  padding-bottom: 10px;
  text-align: center;
  font-size: 40px;
  background-color: #eee;
  color: #50586c;
  font-weight: bold;
  font-family: ‘Palatino Linotype’, ‘Book Antiqua’, Palatino, serif; ;
`;

const Line = styled.hr`
  margin: 1px auto;
  max-width: 1300px;
  height: 1px;
  border: 1px solid #ddd;
  background-color: #ddd;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
