import React from "react";
import Dictlist from "./DictList";
import DictWriting from "./DictWriting";
import styled from "styled-components";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar>
        My Dictionary
        <Line />
      </NavBar>
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
  height: 100vh;
  display: flex;
  padding: 50px 0px;
  margin: auto;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap: 20px;
`;

const NavBar = styled.div`
  max-width: 1300px;
  margin: auto;
  text-align: center;
  font-size: 40px;
  background-color: #eee;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;
