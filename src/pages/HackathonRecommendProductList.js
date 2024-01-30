import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider, styled} from '@mui/material/styles';
import {red} from "@mui/material/colors";
import {Button, InputAdornment, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {Item} from "./Guide";
import onClickProduct from "../utils/productListener";
import {products, recommendProducts} from "../utils/products";
import {useDispatch} from "react-redux";
import {Card} from "antd";




export default function HackathonRecommendProductList(state) {

    const dispatch = useDispatch();
    const productComponents = recommendProducts.map((item, index) => (

        <Grid item xs={7} >
            <Card onClick={() => onClickProduct(item, dispatch)}>
                <Typography
                    sx={{flex: '1 1 100%'}}
                    variant="h4"
                    id="tableTitle"
                    component="div"
                    marginBottom={"30px"}
                >
                    {item.title}
                </Typography>
                <hr style={{marginBottom: "20px"}}/>
                <Typography style={{whiteSpace: 'pre-wrap', textAlign: "left"}}>
                    {item.productSummary}
                </Typography>
            </Card>
        </Grid>
    ))

    return (
        <div>
            <Typography
                sx={{flex: '1 1 100%'}}
                variant="h4"
                id="tableTitle"
                component="div"
                marginBottom={"30px"}
            >
                AI 추천 상품
            </Typography>
            <Grid {...state} spacing={2} alignItems={"center"} justifyContent="center" container>




                    {productComponents}



            </Grid>
        </div>

    );
}