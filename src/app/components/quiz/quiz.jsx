import { useSelector, useDispatch } from "react-redux"
import { Progress, Button } from "antd"
import { RadioGroup, FormControlLabel,Radio } from "@mui/material"
import styles from './quiz.module.css'
import {selectOption, nextQuestion} from "../../store/features/quizSlice"
import Result from "./answers/answers"

const quizInfo = {
    name:'Java Script basics',
    path:'/quizes/quiz1',
    complexity: 2,
    img: 'https://itproger.com/img/tests/node-js.svg'
}

const Quiz = ()=>{
    const questions = useSelector((state)=> state.quiz.questions) 
    let currentQuestion = useSelector((state)=> state.quiz.questions[state.quiz.currentQuestionIndex])
    let result = useSelector((state)=> state.quiz.result)
    const dispatch = useDispatch()
    
   

    const handleNext = ()=>{
        dispatch(nextQuestion())
    }

    const handleCheckBoxChange = (event) =>{
        dispatch(selectOption(event.target.value))
    }

    

    if(!currentQuestion){
        return (
        <Result/>
    )
    }

    
    return (
        <div className={styles.quiz_content}>
            <div className={styles.quiz_header}>
                <div className={styles.question}>
                    <span className={styles.q}>Question:</span><span className={styles.id}>{currentQuestion.id}</span><span className={styles.length}> | {questions.length}</span>
                </div>
                <Progress percent={result} type="circle" size={80} 
                    strokeWidth={8} strokeColor={
                    result > 0 && result < 50 ? '#ef233c' : 
                    (result >= 50 && result < 80 ? '#ffd449' : '#2dc653')
                }/>
            </div>
            <div>
                <p className={styles.p}>{currentQuestion.question}</p>
            </div>
            <div className={styles.quiz_body}>
                <RadioGroup
                    aria-labelledby="quiz-options"
                    defaultValue="quiz"
                    name="quiz-options"
                    value={currentQuestion.selected || ''}
                    className={styles.options_wrap}
                    onChange={handleCheckBoxChange}
                >

                    {currentQuestion.variants.map((variant, ind) => {
                        return <FormControlLabel
                            key={ind + 1}
                            value={variant}
                            control={<Radio checked={currentQuestion.selected === variant} color="error" />}
                            label={variant}
                            className={styles.quiz_options}

                        />
                    })}
                </RadioGroup>

            </div>
            <div className={styles.quiz_footer}>
                <Button disabled={!currentQuestion.selected} 
                variant="contained" color="success"
                onClick={handleNext}>
                    {currentQuestion.id == questions.length ? 'Finish' : `Next`}

                </Button>
            </div>
        </div>
    )
} 

export default Quiz