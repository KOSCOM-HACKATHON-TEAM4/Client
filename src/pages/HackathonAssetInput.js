import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider, styled} from '@mui/material/styles';
import {red} from "@mui/material/colors";
import {Button, InputAdornment, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {Item} from "./Guide";
import HackathonProductList from "./HackathonProductList";
import HackathonRecommendProductList from "./HackathonRecommendProductList";
import HackathonAIProductSummary from "./HackathonAIProductSummary";
import HackathonAssetSimulator from "./HackathonAssetSimulator";



export default function HackathonAssetInput(state) {



    return (
        <Grid {...state} container >

            <Grid item xs={4} >
                <Item >
                    <HackathonProductList/>
                    {/*<HackathonRecommendProductList/>*/}
                    <HackathonAIProductSummary/>
                </Item>
            </Grid>

            <Grid item xs={8} >
                <Item>
                    <HackathonAssetSimulator/>
                </Item>
            </Grid>

        </Grid>
    );
}