import React from "react";
import { Button, Stack } from "@mui/material";
const LessonButton = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="error">outlined</Button>
        <Button variant="contained"  color="secondary">outlined</Button>
        <Button variant="contained"  color="warning">outlined</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="error">outlined</Button>
        <Button variant="outlined"  color="secondary">outlined</Button>
        <Button variant="outlined"  color="warning">outlined</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="text" color="primary">Mavi</Button>
        <Button variant="text" color="secondary">Mavi</Button>
        <Button variant="text" color="success">Mavi</Button>
        <Button variant="text" color="error">Mavi</Button>
        <Button variant="text" color="warning">Mavi</Button>
        <Button variant="text" color="info">Mavi</Button>

      </Stack>
    </Stack>
  );
};

export default LessonButton;
