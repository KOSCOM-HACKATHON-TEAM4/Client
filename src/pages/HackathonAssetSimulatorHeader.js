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
import {setAddEmptyRow} from "../modules/assetData";




export default function HackathonAssetSimulatorHeader(state) {

    const dispatch = useDispatch()

    const onClickAddRow = () => {
        dispatch(setAddEmptyRow(true))
    }

    return (
        <Grid {...state} container>

            <Grid item xs={6}>
                <Item style={{}}>
                    <Typography
                        sx={{flex: '1 1 100%'}}
                        variant="h4"
                        id="tableTitle"
                        component="div"
                        marginBottom={"30px"}
                        style={{textAlign:"left",}}
                        fontFamily={"Roboto"}
                        fontSize={"20px"}
                        fontWeight={500}
                        color={"black"}
                    >
                        자산 시뮬레이터
                    </Typography>
                </Item>
            </Grid>


            <Grid item xs={2}>
                <Item>
                    <Button onClick={onClickAddRow}>직접추가</Button>
                </Item>
            </Grid>

            <Grid item xs={2}>
                <Item>
                    <Button>리셋하기</Button>
                </Item>
            </Grid>

        </Grid>
    );
}