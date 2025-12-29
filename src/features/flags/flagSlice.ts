import { createSlice } from '@reduxjs/toolkit';

import { fetchFeatureFlags, updateFeatureFlag } from './flagThunks';
import type { FlagsState } from './types';

const initialState: FlagsState = {
  entities: {},
  loading: false,
  error: null,
};

const flagSlice = createSlice({
  name: 'flags',
  initialState,
  reducers: {
    toggleOptimistic(state, action) {
      const flag = state.entities[action.payload];
      if (flag) {
        flag.enabled = !flag.enabled;
        flag.lastUpdated = new Date().toISOString();
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFeatureFlags.pending, state => {
        state.loading = true;
      })
      .addCase(fetchFeatureFlags.fulfilled, (state, action) => {
        state.loading = false;
        action.payload.forEach(flag => {
          state.entities[flag.key] = flag;
        });
      })
      .addCase(fetchFeatureFlags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load flags';
      })
      .addCase(updateFeatureFlag.rejected, (state, action) => {
        state.error = action.error.message || 'Update failed';
      });
  },
});

export const { toggleOptimistic } = flagSlice.actions;
export default flagSlice.reducer;
