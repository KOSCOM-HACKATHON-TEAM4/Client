import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider, styled} from '@mui/material/styles';
import {red} from "@mui/material/colors";
import {Button, InputAdornment, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {Item} from "./Guide";
import HackathonAssetSimulatorHeader from "./HackathonAssetSimulatorHeader";
import HackathonAssetInfo from "./HackathonAssetInfo";
import HackathonProductTable from "./HackathonProductTable";
import HackathonDateButtons from "./HackathonDateButtons";
import HackathonAssetText from "./HackathonAssetText";
import HackathonProductList from "./HackathonProductList";
import HackathonAIProductSummary from "./HackathonAIProductSummary";
import HackathonAssetSimulator from "./HackathonAssetSimulator";
import HackathonDashboardHeader from "./HackathonDashboardHeader";
import {useSelector} from "react-redux";
import Graph1 from "../imgs/graph1.png";
import Graph2 from "../imgs/graph2.png";

const images = [
    Graph1,
    Graph2,
    Graph1,
    Graph2,
    Graph1,
]
export default function HackathonGraphImage(state) {

    const imageIndex = useSelector((state) => state.assetDataReducer.imageIndex);

    return (
        <img src={images[imageIndex]} alt="그래프1"/>
    );
}