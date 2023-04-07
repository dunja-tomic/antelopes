import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { Antelope } from "../../data/antelope";
import { formatContinent, formatHorns } from "../../utils/format";

interface AntelopeTableProps {
  antelopes: Antelope[];
}

export const AntelopeTable = ({ antelopes }: AntelopeTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Continent</TableCell>
            <TableCell align="right">Weight&nbsp;(kg)</TableCell>
            <TableCell align="right">Height&nbsp;(cm)</TableCell>
            <TableCell align="right">Horns</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {antelopes.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                <img src={row.picture} alt={row.name} height={100} />
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">
                {formatContinent(row.continent)}
              </TableCell>
              <TableCell align="right">{row.weight}</TableCell>
              <TableCell align="right">{row.height}</TableCell>
              <TableCell align="right">{formatHorns(row.horns)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
