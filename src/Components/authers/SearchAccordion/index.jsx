import React from "react";
import styles from "./style";
import {
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Search, ExpandCircleDown } from "@mui/icons-material";

const SearchAccordion = ({ children, title }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandCircleDown sx={styles.expandDown} />}
        style={styles.summary}
      >
        <Typography fontSize={14}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails style={styles.details}>{children}</AccordionDetails>
    </Accordion>
  );
};

export default SearchAccordion;
