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



export default function HackathonAIProductSummary(state) {

    const productSummary = useSelector((state) => state.assetDataReducer.productSummary);
    return (
        <Grid {...state} container>

            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h4"
                id="tableTitle"
                component="div"
                marginBottom={"30px"}
                style={{textAlign:"left"}}
                fontFamily={"Roboto"}
                fontSize={"20px"}
                fontWeight={500}
                color={"black"}
            >
                CHATGPT 상품 요약
            </Typography>
            <Grid item xs={10} style={{}}  >
                <Item
                    style={{background:"#E3F2FD",minHeight: "300px",borderRadius:"8px",paddingInline:"30px", paddingBlock:"25px"}}
                >



                        <Typography style={{whiteSpace: 'pre-wrap', textAlign: "left", color:"#2D2D2D", fontSize:"17px",fontFamily:"Epilogue",fontWeight:400}}>
                            {productSummary}
                        </Typography>




                </Item>
            </Grid>

        </Grid>
    );
}