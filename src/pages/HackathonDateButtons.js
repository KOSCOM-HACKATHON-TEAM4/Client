import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider, styled} from '@mui/material/styles';
import {red} from "@mui/material/colors";
import {Button, InputAdornment, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {Item} from "./Guide";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentDate} from "../modules/assetData";

export default function HackathonDateButtons(state) {

    const dispatch = useDispatch();
    const currentDate = useSelector((state) => state.assetDataReducer.currentDate);
    const addDate = (amount) => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + amount)
        dispatch(setCurrentDate(newDate))
    }

    const setToday = () => {
        dispatch(setCurrentDate(new Date()))
    }


    return (
        <Grid {...state} container justifyContent={"center"}>



            <Grid item xs={2}>
                <Item>
                    <Button onClick={()=>setToday()}>오늘</Button>
                </Item>
            </Grid>

            <Grid item xs={2}>
                <Item>
                    <Button onClick={()=>addDate(1)}>+1</Button>
                </Item>
            </Grid>

            <Grid item xs={2}>
                <Item>
                    <Button onClick={()=>addDate(30)}>+30</Button>
                </Item>
            </Grid>

            <Grid item xs={2}>
                <Item>
                    <Button onClick={()=>addDate(365)}>+365</Button>
                </Item>
            </Grid>

        </Grid>
    );
}