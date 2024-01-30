import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider, styled} from '@mui/material/styles';
import {red} from "@mui/material/colors";
import {Button, InputAdornment, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {Item} from "./Guide";
import {
    DataGrid,
    gridColumnFieldsSelector,
    gridPaginatedVisibleSortedGridRowIdsSelector,
    useGridApiRef
} from "@mui/x-data-grid";
import {useDispatch, useSelector} from "react-redux";
import {setAddEmptyRow, setDateChanged, setRowToAdd, setTotalEstimateAsset} from "../modules/assetData";
import calculate, {getDateDiff} from "../utils/calculator";

const sampleRows = []
// const sampleRows = [
//     { id: 1, 상품명: 'Hello', 타입: 'World' , 수익률: 'World', 시작일: 'World', 기간: 'World', 총자산: 'World', 월추가납입액: 'World' },
//     { id: 2, 상품명: 'Hello2', 타입: 'World2' , 수익률: 'World2', 시작일: 'World2', 기간: 'World', 총자산: 'World', 월추가납입액: 'World' },
//     { id: 3, 상품명: 'Hello3', 타입: 'World3' , 수익률: 'World3', 시작일: 'World3', 기간: 'World', 총자산: 'World', 월추가납입액: 'World' },
// ]

const sampleColumns = [
    {field: '상품명', headerName: '상품명', width: 150, editable: true},
    {
        field: '타입', headerName: '타입', width: 150, editable: true,
        type: "singleSelect",
        valueOptions: ({row}) => {
            const options = ["예금", "적금", "CMA", "채권", "배당주"];
            return options;
        },
    },
    {
        field: '수익률', headerName: '수익률%', width: 150, editable: true,
        valueFormatter: (params) => {
            return `${params.value}%`;
        },
    },
    {field: '시작일', headerName: '시작일', width: 150, editable: true},
    {
        field: '기간', headerName: '기간(개월)', width: 150, editable: true,
        valueFormatter: (params) => {
            return `${params.value}개월`;
        },
    },
    {
        field: '초기자본', headerName: '초기 자본', width: 150, editable: true,
        valueGetter: (params) => {
            if (!params.value) {
                return 0;
            }
            return parseInt(params.value);
        },
    },
    {field: '총자산', headerName: '총 자산', width: 150, editable: true},
    {
        field: '월추가납입액', headerName: '월 추가 납입액', width: 150, editable: true,
        valueGetter: (params) => {
            if (!params.value) {
                return 0;
            }
            return parseInt(params.value);
        },
    },
]

export default function HackathonProductTable(state) {

    const dispatch = useDispatch();
    const productRows = useSelector((state) => state.assetDataReducer.productRows);
    const rowToAdd = useSelector((state) => state.assetDataReducer.rowToAdd);
    const addEmptyRow = useSelector((state) => state.assetDataReducer.addEmptyRow);
    const currentDate = useSelector((state) => state.assetDataReducer.currentDate);
    const dateChanged = useSelector((state) => state.assetDataReducer.dateChanged);
    const totalEstimateAsset = useSelector((state) => state.assetDataReducer.totalEstimateAsset);
    const [rows, setRows] = React.useState(sampleRows);

    const apiRef = useGridApiRef()


    const handleUpdateRow = () => {
        if (rows.length === 0) {
            return;
        }
        setRows((prevRows) => {

            return prevRows.map((row, index) =>
                index === 0 ? {...row, 상품명: "update"} : row,
            );
        });
    };

    const selectFirstRow = () => {
        const visibleRows = gridPaginatedVisibleSortedGridRowIdsSelector(apiRef)
        console.log(visibleRows.length)
        if (visibleRows.length === 0) {
            return;
        }

        apiRef.current.selectRow(
            visibleRows[0],
            !apiRef.current.isRowSelected(visibleRows[0]),
        );
        console.log(apiRef.current.getRow(1))
    }

    const sumAsset = () => {
        let sum = 0
        for (const row of rows) {
            sum += row.총자산
        }
        dispatch(setTotalEstimateAsset(sum))
    };
//     { id: 1, 상품명: 'Hello', 타입: 'World' , 수익률: 'World', 시작일: 'World', 기간: 'World', 총자산: 'World', 월추가납입액: 'World' },
    const processRowUpdate = (newRow) => {
        let updatedRow = {...newRow, isNew: false};
        setRows(rows.map((row) => {
                if (row.id === newRow.id) {
                    const obj = new Object();
                    obj.productType = newRow.타입
                    obj.term = parseInt(newRow.기간)
                    // console.log(newRow)
                    obj.initialCapital = parseInt(newRow.초기자본)
                    obj.interestRate = parseInt(newRow.수익률)
                    obj.monthlyAdded = parseInt(newRow.월추가납입액)
                    console.log(obj)
                    const expectedCapital = calculate(obj, getDateDiff(currentDate, new Date()))
                    updatedRow = {...updatedRow, 총자산: expectedCapital}
                }
                return (row.id === newRow.id ? updatedRow : row)
            }
        ));
        sumAsset()
        return updatedRow;
    };


    const addEmptyRowFun = () => {
        const id = rows.length + 1;
        const today = new Date()
        const startDate = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
        const newRow = {id: id, 상품명: '', 타입: '선택', 수익률: 0, 시작일: startDate, 기간: 0, 총자산: 0, 월추가납입액: 0, 초기자본: 0};
        setRows((prevRow) => [...prevRow, newRow]);
    }

    const addRow = (row) => {
        const id = rows.length + 1;
        const today = new Date()
        const startDate = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
        const newRow = {
            id: id,
            상품명: row.productName,
            타입: row.productType,
            수익률: row.returnRate,
            시작일: startDate,
            기간: row.term,
            총자산: 0,
            월추가납입액: 0,
            초기자본: 0
        };
        setRows((prevRow) => [...prevRow, newRow]);
    }

    if (rowToAdd != null) {
        addRow(rowToAdd)
        dispatch(setRowToAdd(null))
    }

    if (addEmptyRow) {
        addEmptyRowFun()
        dispatch(setAddEmptyRow(false))
    }
    if (dateChanged) {
        setRows(rows.map((row) => {
                const obj = new Object();
                obj.productType = row.타입
                obj.term = parseInt(row.기간)
                // console.log(newRow)
                obj.initialCapital = parseInt(row.초기자본)
                obj.interestRate = parseInt(row.수익률)
                obj.monthlyAdded = parseInt(row.월추가납입액)
                const expectedCapital = calculate(obj, getDateDiff(currentDate, new Date()))
                return {...row, 총자산: expectedCapital}
            }
        ))
        sumAsset()
        dispatch(setDateChanged(false))
    }

//예금, 적금, cma, 채권, 배당주(넣어놓기만)
    return (
        <Grid {...state} container>

            {/*<Button onClick={handleUpdateRow}>1번 항목 업데이트</Button>*/}
            {/*<Button onClick={addEmptyRowFun}>항목 추가</Button>*/}
            {/*<Button onClick={selectFirstRow}>첫 번째 행 선택</Button>*/}
            <Grid item style={{height: '100%', width: '100%', background: "white"}}>
                <DataGrid
                    apiRef={apiRef}
                    rows={rows}
                    columns={sampleColumns}
                    processRowUpdate={processRowUpdate}
                />

            </Grid>

        </Grid>
    );
}