import type { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectFlagsState = (state: RootState) => state.flags;

export const selectFlagByKey = (key: string) =>createSelector(
    selectFlagsState, 
    flags => flags.entities[key]);

export const selectAllFlags = createSelector(
    selectFlagsState,
    flags => Object.values(flags.entities)
)