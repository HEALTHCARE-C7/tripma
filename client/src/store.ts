import { configureStore  } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import authReducer from './reduce/authReduceLogin'
import authReducerRegister from './reduce/authReducerRegister'
import flight from './reduce/flight'
import user from './reduce/user'
// import { middlewareUser } from './middleware/user'

// Create Store

const store = configureStore({
	reducer: {
		login: authReducer,
		register: authReducerRegister,
		auth: authReducer,
		flight:flight,
		user:user,
	
	}
})

// Declare Typed Definitions
type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;