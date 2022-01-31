import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function PostButton() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 2, width: "32ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="단어" variant="filled" />
      <TextField id="filled-basic" label="설명" variant="filled" />
      <TextField id="filled-basic" label="예시" variant="filled" />
    </Box>
  );
}
