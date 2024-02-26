import { createSlice } from '@reduxjs/toolkit';

export interface CalculatorState {
    value: number;
}

const initialState: CalculatorState = {
    value: 10,
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addValue: (state) => {
            state.value += 1;
        },
    },
});

export const { addValue } = calculatorSlice.actions;

export default calculatorSlice.reducer;
