import { createAsyncThunk } from "@reduxjs/toolkit";
import type { FeatureFlag } from "./types";

const mockFlag: FeatureFlag [] =[
    {
        id: '1',
        key: 'aiSearch',
        enabled: true,
        lastUpdated: new Date().toISOString(),
    },
    {
        id: '2',
        key: 'darkMode',
        enabled: false,
        lastUpdated: new Date().toISOString(),
    },
]

export const fetchFeatureFlags = createAsyncThunk(
    'flags/fetch',
    async () => {
        await new Promise(res => setTimeout(res, 500))
        return mockFlag
    }
)

export const updateFeatureFlag = createAsyncThunk<
  { key: string; enabled: boolean },
  { key: string; enabled: boolean }
>('flags/update', async payload => {
  await new Promise(res => setTimeout(res, 300));
  return payload;
});