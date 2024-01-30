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
import {products} from "../utils/products";
import {useDispatch} from "react-redux";
import {Card} from "antd";



export default function HackathonProductList(state) {

    const dispatch = useDispatch();
    const productComponents = products.map((item, index) => (
        <Item onClick={()=>onClickProduct(item, dispatch)}
              style={{height:"200px",borderRadius:"17px",paddingBlock:"37px",paddingInline:"20px",textAlign:"left",background: "#FAFAFA",boxShadow:"3px 3px 3px gray"}}>

                <Typography style={{whiteSpace: 'pre-wrap'}}>
                    {item.productName}
                </Typography>
            {/*<div onClick={()=>onClickProduct(item, dispatch)}>*/}
            {/*    <Typography*/}
            {/*        sx={{ flex: '1 1 100%' }}*/}
            {/*        variant="h4"*/}
            {/*        id="tableTitle"*/}
            {/*        component="div"*/}
            {/*        marginBottom={"30px"}*/}
            {/*    >*/}
            {/*        */}
            {/*    </Typography>*/}
            {/*    <hr style={{marginBottom:"20px"}}/>*/}
            {/*    <Typography style={{whiteSpace: 'pre-wrap'}}>*/}
            {/*        상품 설명*/}
            {/*    </Typography>*/}
            {/*</div>*/}


        </Item>
    ))

    return (
        <Grid {...state} justifyContent={"flex-start"} container>

            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h4"
                id="tableTitle"
                component="div"
                marginBottom={"30px"}
                style={{ textAlign:"left"}}
                fontFamily={"Roboto"}
                fontSize={"20px"}
                fontWeight={500}
                color={"black"}
            >
                상품종류
            </Typography>
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

                    {productComponents}

                </Box>
            </Grid>

        </Grid>
    );
}