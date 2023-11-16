import React from "react";
import { Typography } from "@mui/material";
const LessonTypography = () => {
  return (
    <div>
      <Typography variant="body1">
        Body1 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Praesentium, culpa quae alias excepturi maxime tenetur commodi repellat,
        dolorum saepe dolores corporis placeat cum.
      </Typography>
      <Typography variant="body2">
        Body2 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Praesentium, culpa quae alias excepturi maxime tenetur commodi repellat,
        dolorum saepe dolores corporis placeat cum.
      </Typography>
      <Typography variant="h1">H1 GORUNUMU</Typography>
      <Typography variant="h2">H2 GORUNUMU</Typography>
      <Typography variant="h3">H3 GORUNUMU</Typography>
      <Typography variant="h4">H4 GORUNUMU</Typography>
      <Typography variant="h5">H5 GORUNUMU</Typography>
      <Typography variant="h6">H6 GORUNUMU</Typography>
      <Typography variant="h1" component="h4">
        H1 gorunumu ancaq h4
      </Typography>
      <Typography variant="h1" component="h4" align="left">
        left
      </Typography>
      <Typography variant="h1" component="h4" align="right">
        right
      </Typography>
      <Typography variant="subtitle1" component="h4" align="right">
        Altbaslik 1
      </Typography>
      <Typography variant="subtitle2" component="h4" align="right">
        Altbaslik 3
      </Typography>
      <Typography variant="caption" component="h4" align="right">
        Caption
      </Typography>
    </div>
  );
};

export default LessonTypography;
