import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";

export const fetchEmployees = createAsyncThunk(
    "fetch/employees",
    async ({ limit, skip }) => {
        const response = await axios.get(`${config.apiUrl}products?limit=${limit}&skip=${skip}`);
        const data = response.data;
        return { products: data.products, total: data.total, skip };
    }
);

const EmployeeSlice = createSlice({
    name: "employees",
    initialState: {
        items: {},
        total: 0,
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                const { products, total, skip } = action.payload;
                state.status = "succeeded";
                products.forEach((item, index) => {
                    state.items[skip + index] = item;
                });
                state.total = total;
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default EmployeeSlice.reducer;
