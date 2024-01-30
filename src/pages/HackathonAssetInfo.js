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


export default function HackathonAssetInfo(state) {

    const targetMoney = useSelector((state) => state.assetDataReducer.targetMoney);
    const jabon = useSelector((state) => state.assetDataReducer.jabon);
    const fixedIncome = useSelector((state) => state.assetDataReducer.fixedIncome);

    return (
        <Grid {...state} container>

            <Grid item style={{ height: '100%', width: '100%' }}  >
                <Box
                    sx={{
                        p: 2,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr 1fr' },
                        gap: 2,
                        alignContent: 'stretch'
                    }}
                    style={{}}
                >

                    <Item style={{height:"180px",borderRadius:"17px",paddingBlock:"37px",paddingInline:"20px",textAlign:"left",background:"#E3F2FD"}} >

                        <Typography style={{whiteSpace: 'pre-wrap'}}>
                            초기 자본: {jabon.toLocaleString()} 원
                            <br/>
                            월 급여: {fixedIncome.toLocaleString()} 원
                            <br/>
                            목표 금액: {targetMoney.toLocaleString()} 원
                        </Typography>

                    </Item>


                </Box>
            </Grid>

        </Grid>
    );
}