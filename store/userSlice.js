import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  clips: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addClip: (state, action) => {
      state.clips.push(action.payload)
    },
    deleteClip: (state, action) => {
      state.clips = state.clips.filter((clip) => clip.url !== action.payload.url)
    },
  },
})

export const { addClip, deleteClip } = userSlice.actions

export default userSlice.reducer