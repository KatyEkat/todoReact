import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Хук useAppDispatch знает тип dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Хук useAppSelector знает тип состояния
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
