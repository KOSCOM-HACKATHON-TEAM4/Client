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
import HackathonSocialInfo from "./HackathonSocialInfo";
import HackathonSocialGraph from "./HackathonSocialGraph";



export default function HackathonSocial(state) {


    return (
        <Grid {...state} container >

            <Grid item xs={6} style={{background:"white", height:"100vh"}}>
                <Item >
                    <HackathonSocialInfo/>
                </Item>
            </Grid>

            <Grid item xs={6}  style={{background:"white", height:"100vh"}}>
                <Item>
                    <HackathonSocialGraph/>
                </Item>
            </Grid>

        </Grid>
    );
}