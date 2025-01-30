import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const idSlice = createSlice({
  name: 'dataTransfer',
  initialState,
  reducers: {
    idData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { idData } = idSlice.actions

export default idSlice.reducer
