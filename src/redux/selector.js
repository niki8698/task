import { createSelector } from "@reduxjs/toolkit";
const list = (state)=>state?.list
const detail = (state)=>state?.detail
export const selectEmpList = createSelector(
list,
(list)=>
    list?.data
)
export const selectEmpDetail = createSelector(
    detail,
    (detail)=>
    detail?.data
    )