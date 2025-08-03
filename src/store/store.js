import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "../features/EmployeeGridSclice"
import graphSlice from "../features/graphSlice"

export const store = configureStore({
    reducer: {
        employees: employeeSlice,
        graphs: graphSlice
    }
})