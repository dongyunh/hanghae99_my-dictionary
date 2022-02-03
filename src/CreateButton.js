import * as React from "react";
import styled from "styled-components";
import { loadCSS } from "fg-loadcss";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import { useNavigate } from "react-router-dom";

export default function CreateButton() {
  const navigate = useNavigate();
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      // Inject before JSS
      document.querySelector("#font-awesome-css") || document.head.firstChild
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <StyledBox
      onClick={() => {
        navigate("/write");
      }}
      sx={{
        "& > :not(style)": {
          m: 2,
        },
      }}
    >
      <Icon
        baseClassName="fas"
        className="fa-plus-circle"
        sx={{ fontSize: 50 }}
      />
    </StyledBox>
  );
}

const StyledBox = styled(Box)`
  && {
    bottom: 0px;
    right: 10px;
    position: fixed;
    z-index: 1000;
    color: #50586c;
    cursor: pointer;
  }
`;
