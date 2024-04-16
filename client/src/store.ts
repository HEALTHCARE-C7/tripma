import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import authReducer from './reduce/authReduceLogin'
import authReducerRegister from './reduce/authReducerRegister'


const store = configureStore({
	reducer: {
		login: authReducer,
		register: authReducerRegister,
	},
});

// Declare Typed Definitions
type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;