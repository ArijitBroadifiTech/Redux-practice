import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store'


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 
//for accessing event and actions


export const useAppSelector = useSelector.withTypes<RootState>() 
//for read properties