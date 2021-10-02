import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledImg = styled("img")(() => ({
  height: "100%",
  width: "100%",
}));

export default function CoverArt(props) {
  const { src, sx } = props;

  return (
    <Box sx={sx}>
      <StyledImg src={src} alt={"cover art"} />
    </Box>
  );
}
