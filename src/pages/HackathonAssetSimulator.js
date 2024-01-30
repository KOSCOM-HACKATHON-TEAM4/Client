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



export default function HackathonAssetSimulator(state) {


    return (
        <Grid {...state} container>

            <HackathonAssetSimulatorHeader/>
            <HackathonAssetInfo/>
            <HackathonProductTable/>
            <HackathonDateButtons/>
            <HackathonAssetText/>

        </Grid>
    );
}