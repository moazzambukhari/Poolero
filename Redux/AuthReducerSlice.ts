import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 10,
}

export const calculatorSlice = createSlice({
    name: 'Calculate',
    initialState,
    reducers: {
        addValue: (state) => {

            state.value += 1
        },

    },
})

// Action creators are generated for each case reducer function
export const { addValue } = calculatorSlice.actions

export default calculatorSlice.reducer