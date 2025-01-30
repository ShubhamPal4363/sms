import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const messageSlice = createSlice({
  name: 'dataTransfer',
  initialState,
  reducers: {
    idMessageData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { idMessageData } = messageSlice.actions

export default messageSlice.reducer
