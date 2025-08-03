import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";


export const fetchGraphData = createAsyncThunk(
    "graphs/fetchData",
    async () => {
        const response = await axios.get(`${config.grapshApiUrl}`)
        return response.data;
    }
);

const graphsSlice = createSlice({
    name: "graphs",
    initialState: {
        barData: [],
        lineData: [],
        pieData: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGraphData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGraphData.fulfilled, (state, action) => {
                state.loading = false;
                state.barData = action.payload.BarGraph;
                state.lineData = action.payload.LineGraph;
                state.pieData = action.payload.PiGraph;
            })
            .addCase(fetchGraphData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default graphsSlice.reducer;