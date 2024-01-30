import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider, styled} from '@mui/material/styles';
import {red} from "@mui/material/colors";
import {Button, InputAdornment, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {Item} from "./Guide";
import {useDispatch} from "react-redux";
import {setAddEmptyRow, setImageIndex} from "../modules/assetData";




export default function HackathonDashboardHeader(state) {

    const dispatch = useDispatch()

    const simulatorBtns = [1,2,3,4,5].map((item, index) => {
        const onClick = () => {
            dispatch(setImageIndex(index))
        }
        return (
            <Grid item xs={2}>
                <Item>
                    <Button
                        style={{fontSize: "20px", color:"black"}}
                        onClick={onClick}>포트폴리오 {item}</Button>
                </Item>
            </Grid>
        )
    })

    return (
        <Grid {...state} container>

            {simulatorBtns}

        </Grid>
    );
}