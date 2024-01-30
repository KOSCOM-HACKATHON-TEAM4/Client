import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider, styled} from '@mui/material/styles';
import {red} from "@mui/material/colors";
import {Button, InputAdornment, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {Item} from "./Guide";
import {useSelector} from "react-redux";

export default function HackathonAssetText(state) {


    const currentDate = useSelector((state) => state.assetDataReducer.currentDate);
    const totalEstimateAsset = useSelector((state) => state.assetDataReducer.totalEstimateAsset);
    return (
        <Grid {...state} container>



            <Typography
                sx={{flex: '1 1 100%'}}
                variant="h4"
                id="tableTitle"
                component="div"
                marginBottom={"30px"}
                style={{
                    color:"#2D2D2D",
                    fontFamily:"Epilogue",
                    fontSize:"17px",
                    fontWeight:400
                }}
            >
                {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월 {currentDate.getDate()}일의 총 자산은 총 {totalEstimateAsset.toLocaleString()}원으로 예상됩니다.
            </Typography>

        </Grid>
    );
}