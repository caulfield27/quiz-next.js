import { configureStore} from "@reduxjs/toolkit";
import quizReducer from "../store/features/quizSlice";



export const store = configureStore({
    reducer:{
        quiz:quizReducer
    }
})

