"use client"

import {createSlice} from "@reduxjs/toolkit";
import {questions} from "./questions";

const quizSlice = createSlice({
    name:'quiz',
    initialState:{
        questions,
        currentQuestionIndex:0,
        result:0,
    },
    reducers:{
        selectOption: (state, {payload})=>{
            state.questions[state.currentQuestionIndex].selected = payload;
        },
        nextQuestion: (state)=>{
            const isCorrect = 
            state.questions[state.currentQuestionIndex].selected ===
            state.questions[state.currentQuestionIndex].correct;
            state.result += isCorrect ? 10 : 0;
            state.currentQuestionIndex++
        },
        resetQuiz: (state)=>{
            state.currentQuestionIndex = 0;
            state.result = 0;
            state.questions.forEach((question) => {
                question.selected = null; 
            });
        }
    }
})

export const {resetQuiz, nextQuestion, selectOption} = quizSlice.actions
export default quizSlice.reducer