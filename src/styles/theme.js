import { createTheme } from "@mantine/core";
import classes from "./focus.module.css";

export const theme = createTheme({
  focusClassName: classes.focus,
  defaultRadius: "xl",
});
