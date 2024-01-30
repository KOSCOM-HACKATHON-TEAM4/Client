import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider, styled} from '@mui/material/styles';
import {red} from "@mui/material/colors";
import {Button, InputAdornment, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setLoading} from "../modules/document";
import {setFixedIncome, setJabon, setTargetMoney} from "../modules/assetData";
import {Input} from "antd";

export const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const darkTheme = createTheme({palette: {mode: 'dark'}});
const lightTheme = createTheme({palette: {mode: 'light'}});

export default function HackathonDataInput(state) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const targetMoney = useSelector((state) => state.assetDataReducer.targetMoney);
    const jabon = useSelector((state) => state.assetDataReducer.jabon);
    const fixedIncome = useSelector((state) => state.assetDataReducer.fixedIncome);

    const [showComponent, setShowComponent] = useState('목표금액');

    const goNextInput = (nextInput) => {
        setShowComponent(nextInput)
    }

    const onTargetMoneyChanged = (event) => {
        if (event.target.value === ""){
            dispatch(setTargetMoney(0))
            return
        }
        dispatch(setTargetMoney(parseInt(event.target.value)))
    }

    const onJabonChanged = (event) => {
        if (event.target.value === ""){
            dispatch(setJabon(0))
            return
        }
        dispatch(setJabon(parseInt(event.target.value)))
    }

    const onFixedIncomeChanged = (event) => {
        if (event.target.value === ""){
            dispatch(setFixedIncome(0))
            return
        }
        dispatch(setFixedIncome(parseInt(event.target.value)))
    }


    return (
        <Grid {...state} justifyContent={"center"} alignItems={'center'} container>

            <Grid item justifyContent={"center"} width={"700px"}>
                <Item
                    style={{background: "#ffffff"}}
                >

                    {showComponent === "목표금액" &&
                        <Item style={{
                            height: "450px",
                            borderRadius: "17px",
                            paddingBlock: "37px",
                            paddingInline: "20px",
                            textAlign: "left"
                        }}>

                            <Typography
                                // variant="h3"
                                id="tableTitle"
                                component="div"
                                marginBottom={"30px"}
                                color={"black"}
                                fontFamily={"Inter"}
                                fontSize={"42px"}
                                style={{marginLeft: "20px", marginTop: "20px"}}
                            >
                                고객님의 목표 금액을 알려주세요.
                            </Typography>
                            <Input placeholder="목표 금액" suffix={"원"} style={{fontSize: "64px", textAlign: "right"}}
                                    variant="borderless"
                                   value={targetMoney}
                                   onChange={onTargetMoneyChanged}
                            />
                            <br />
                            <Button
                                style={{marginTop: "60px", marginLeft: "20px"}}
                                variant="text" onClick={() => goNextInput("초기자본")}>다음 항목으로</Button>

                        </Item>
                    }


                    {showComponent === "초기자본" &&
                        <Item style={{
                            height: "450px",
                            borderRadius: "17px",
                            paddingBlock: "37px",
                            paddingInline: "20px",
                            textAlign: "left"
                        }}>

                            <Typography
                                // variant="h3"
                                id="tableTitle"
                                component="div"
                                marginBottom={"30px"}
                                color={"black"}
                                fontFamily={"Inter"}
                                fontSize={"42px"}
                                style={{marginLeft: "20px", marginTop: "20px"}}
                            >
                                고객님의 초기 자본금을 알려주세요.
                            </Typography>
                            <Input placeholder="목표 금액" suffix={"원"} style={{fontSize: "64px", textAlign: "right"}}
                                   variant="borderless"
                                   value={jabon}
                                   onChange={onJabonChanged}
                            />
                            <br />
                            <Button
                                style={{marginTop: "60px", marginLeft: "20px"}}
                                variant="text" onClick={() => goNextInput("고정수입")}>다음 항목으로</Button>

                        </Item>
                    }

                    {showComponent === "고정수입" &&
                        <Item style={{
                            height: "450px",
                            borderRadius: "17px",
                            paddingBlock: "37px",
                            paddingInline: "20px",
                            textAlign: "left"
                        }}>

                            <Typography
                                // variant="h3"
                                id="tableTitle"
                                component="div"
                                marginBottom={"30px"}
                                color={"black"}
                                fontFamily={"Inter"}
                                fontSize={"42px"}
                                style={{marginLeft: "20px", marginTop: "20px"}}
                            >
                                고객님의 월 고정 수입을 알려주세요.
                            </Typography>
                            <Input placeholder="목표 금액" suffix={"원"} style={{fontSize: "64px", textAlign: "right"}}
                                   variant="borderless"
                                   value={fixedIncome}
                                   onChange={onFixedIncomeChanged}
                            />
                            <br />
                            <Button
                                style={{marginTop: "60px", marginLeft: "20px"}}
                                variant="text" onClick={() => navigate('/dashboard/products', {replace: true})}>다음 항목으로</Button>

                        </Item>
                    }


                </Item>
            </Grid>

        </Grid>
    );
}