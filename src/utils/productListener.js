import {setProductSummary, setRowToAdd} from "../modules/assetData";

export default function onClickProduct(prop, dispatch) {
    dispatch(setProductSummary(prop.productSummary))
    dispatch(setRowToAdd(prop))
};