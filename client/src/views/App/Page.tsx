import React, { useState, useEffect } from "react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

import { getAntelopes, getAntelopeData } from "../../utils/api";
import { Antelope } from "../../data/antelope";
import { AntelopeTable } from "../../components/AntelopeTable";
import { BarChart } from "../../components/BarChart";
import {
  AntelopeContinentData,
  AntelopeData,
  AntelopeHornsData,
} from "../../data/antelopeData";

import "./Page.css";
import { formatContinent, formatHorns } from "../../utils/format";
import { colours } from "../../utils/colours";
import ScatterPlot from "../../components/ScatterPlot";

/**
 * Formats the continentData from the API into the format that the
 * ChartJS Bar chart component seeks
 * @param antelopeContinentData
 * @returns
 */
const formatContinentData = (
  antelopeContinentData: AntelopeContinentData[]
) => {
  return antelopeContinentData.map(({ continent, count }, index) => {
    const data: Record<string, number> = {};
    data[formatContinent(continent)] = count;

    return {
      label: formatContinent(continent),
      data,
      backgroundColor: colours[index],
    };
  });
};

/**
 * Formats the hornsData from the API into the format that the
 * ChartJS Bar chart component seeks
 * @param antelopeHornsData
 * @returns
 */
const formatHornsData = (antelopeHornsData: AntelopeHornsData[]) => {
  return antelopeHornsData.map(({ horns, count }, index) => {
    const data: Record<string, number> = {};
    data[formatHorns(horns)] = count;
    return {
      label: formatHorns(horns),
      data,
      backgroundColor: colours[index],
    };
  });
};

/**
 * Formats the height/weight data into x and y points which can
 * be displayed by ChartJS as a scatter plot
 */
const formatHeightWeightData = (antelopes: Antelope[]) => {
  return antelopes.map(({ name, height, weight }, index) => {
    return {
      label: name,
      data: [{ x: height, y: weight }],
      backgroundColor: colours[index % colours.length],
    };
  });
};

const App = () => {
  const [antelopes, setAntelopes] = useState<Antelope[]>();
  const [antelopeData, setAntelopeData] = useState<AntelopeData>();

  useEffect(() => {
    getAntelopes().then((data) => {
      setAntelopes(data);
    });
    getAntelopeData().then((data) => {
      setAntelopeData(data);
    });
  }, []);

  return (
    <div className="Page">
      <div className="Header">
        <Container>
          <Typography variant="h2">The Great Antelope Adventure</Typography>
          <Typography>
            The Internet's leading source for antelope statistics
          </Typography>
        </Container>
      </div>

      <Container>
        {!(antelopes && antelopeData) ? (
          "Loading..."
        ) : (
          <div className="Body">
            <Grid container spacing={2}>
              <Grid item md={6}>
                <Card>
                  <CardContent>
                    <BarChart
                      title="Where do antelopes live?"
                      yAxisTitle="Count"
                      datasets={formatContinentData(antelopeData.byContinent)}
                    />
                  </CardContent>
                </Card>
              </Grid>

              <Grid item md={6}>
                <Card>
                  <CardContent>
                    <BarChart
                      title="What kind of horns do antelopes have?"
                      yAxisTitle="Count"
                      datasets={formatHornsData(antelopeData.byHorns)}
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item md={12}>
                <Card>
                  <CardContent>
                    <ScatterPlot
                      title="Height/weight relationship"
                      xAxisTitle="Weight (kg)"
                      yAxisTitle="Height (cm)"
                      datasets={formatHeightWeightData(antelopes)}
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Card className="AntelopeTable">
              <CardContent>
                <AntelopeTable antelopes={antelopes} />
              </CardContent>
            </Card>
          </div>
        )}
      </Container>
    </div>
  );
};

export default App;
