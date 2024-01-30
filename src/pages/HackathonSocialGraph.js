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
import HackathonGraphImage from "./HackathonGraphImage";
import HackathonRecommendProductList from "./HackathonRecommendProductList";
import {Card} from "antd";
import onClickProduct from "../utils/productListener";

import Graph3 from "../imgs/graph3.png";

export default function HackathonSocialGraph(state) {

    return (
        <div>
            <Typography
                sx={{flex: '1 1 100%'}}
                variant="h4"
                id="tableTitle"
                component="div"
                marginBottom={"30px"}
            >
                유럽 여행 목돈 모으기
            </Typography>
            <Grid {...state} justifyContent={"center"} container >
                <img src={Graph3} width={"800px"}/>


            </Grid>
        </div>

    );
}