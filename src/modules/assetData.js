import {getGuideDocuments, getNoticeDocuments, getWrittenDocuments} from "../api/documentApi";
import {getProjects} from "../api/projectApi";

const SET_JABON = "SET_JABON"
const SET_TARGET_MONEY = "SET_TARGET_MONEY"
const SET_FIXED_INCOME = "SET_FIXED_INCOME"
const SET_PRODUCT_SUMMARY = "SET_PRODUCT_SUMMARY"
const SET_CURRENT_DATE = "SET_CURRENT_DATE"
const SET_TOTAL_ESTIMATE_ASSET = "SET_TOTAL_ESTIMATE_ASSET"
const SET_PRODUCT_ROWS = "SET_PRODUCT_ROWS"
const SET_ROW_TO_ADD = "SET_ROW_TO_ADD"
const SET_ADD_EMPTY_ROW = "SET_ADD_EMPTY_ROW"
const SET_DATE_CHANGED = "SET_DATE_CHANGED"
const SET_IMAGE_INDEX = "SET_IMAGE_INDEX"


export const setJabon = (jabon) => ({
    type: SET_JABON,
    jabon: jabon
});

export const setTargetMoney = (targetMoney) => ({
    type: SET_TARGET_MONEY,
    targetMoney: targetMoney
});

export const setFixedIncome = (fixedIncome) => ({
    type: SET_FIXED_INCOME,
    fixedIncome: fixedIncome
});

export const setProductSummary = (productSummary) => ({
    type: SET_PRODUCT_SUMMARY,
    productSummary: productSummary
});

export const setCurrentDate = (currentDate) => ({
    type: SET_CURRENT_DATE,
    currentDate: currentDate
});

export const setTotalEstimateAsset = (totalEstimateAsset) => ({
    type: SET_TOTAL_ESTIMATE_ASSET,
    totalEstimateAsset: totalEstimateAsset
});

export const setProductRows = (productRows) => ({
    type: SET_PRODUCT_ROWS,
    productRows: productRows
});

export const setRowToAdd = (rowToAdd) => ({
    type: SET_ROW_TO_ADD,
    rowToAdd: rowToAdd
});

export const setAddEmptyRow = (addEmptyRow) => ({
    type: SET_ADD_EMPTY_ROW,
    addEmptyRow: addEmptyRow
});

export const setDateChanged = (dateChanged) => ({
    type: SET_DATE_CHANGED,
    dateChanged: dateChanged
});

export const setImageIndex = (imageIndex) => ({
    type: SET_IMAGE_INDEX,
    imageIndex: imageIndex
});



// export const callGetProjects =
//     () =>
//         async (dispatch, getState) => {
//             await getProjects().then((res) => {
//                 dispatch(getProjectsSuccess(res.data.projects))
//             }).catch((error) => {
//                 console.log(error.response.data)
//             })
//         };
//

// 목표금액, 초기 자본, 월 고정 수입,
const initialState = {
    targetMoney: 0,
    jabon: 0,
    fixedIncome: 0,
    productSummary: "",
    currentDate: new Date(),
    totalEstimateAsset: 0,
    productRows: [],
    rowToAdd: null,
    addEmptyRow: false,
    dateChanged: false,
    imageIndex: 0
}

function assetDataReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case SET_TARGET_MONEY:
            return {
                ...state,
                targetMoney: action.targetMoney
            }
        case SET_JABON:
            return {
                ...state,
                jabon: action.jabon
            }
        case SET_FIXED_INCOME:
            return {
                ...state,
                fixedIncome: action.fixedIncome
            }
        case SET_PRODUCT_SUMMARY:
            return {
                ...state,
                productSummary: action.productSummary
            }
        case SET_CURRENT_DATE:
            return {
                ...state,
                currentDate: action.currentDate,
                dateChanged: true
            }
        case SET_TOTAL_ESTIMATE_ASSET:
            return {
                ...state,
                totalEstimateAsset: action.totalEstimateAsset
            }
        case SET_PRODUCT_ROWS:
            return {
                ...state,
                productRows: action.productRows
            }
        case SET_ROW_TO_ADD:
            return {
                ...state,
                rowToAdd: action.rowToAdd
            }
        case SET_ADD_EMPTY_ROW:
            return {
                ...state,
                addEmptyRow: action.addEmptyRow
            }
        case SET_DATE_CHANGED:
            return {
                ...state,
                dateChanged: action.dateChanged
            }
        case SET_IMAGE_INDEX:
            return {
                ...state,
                imageIndex: action.imageIndex
            }
        default:
            return state
    }
}

export default assetDataReducer;