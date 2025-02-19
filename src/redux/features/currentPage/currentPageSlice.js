import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: '',
}

const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.page = action.payload
    },
  },
})

export const { setCurrentPage } = currentPageSlice.actions

export default currentPageSlice
