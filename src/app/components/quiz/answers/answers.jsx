import { useDispatch, useSelector } from "react-redux";
import styles from './answers.module.css'
import { Progress } from "antd";
import {Button} from "antd";
import { resetQuiz } from "@/app/store/features/quizSlice";

const Result = ()=>{
    const result = useSelector((state)=> state.quiz.result)
    const questions = useSelector((state)=> state.quiz.questions)
    let maxPoint = 0;
    const dispatch = useDispatch()
    for(let i = 0; i < questions.length; i++){
        maxPoint+=10
    }

    const handleReset = ()=>{
        dispatch(resetQuiz())
    }

    return (
        <div className={styles.completed_result}>
            <h1>Quiz completed! Your final result</h1>
            <span className={styles.final_result}>{`${result} of ${maxPoint} points`}</span>
            <Progress percent={result} type="circle" size={80} 
                    strokeWidth={8} strokeColor={
                    result > 0 && result < 50 ? '#ef233c' : 
                    (result >= 50 && result < 80 ? '#ffd449' : '#2dc653')
            }/>
            <div className={styles.complete_button_wrap}>
                <Button variant="contained" color="success">
                    <span>show answers</span>
                </Button>
                <Button variant="contained" color="primary" onClick={handleReset}>
                    try again
                </Button>

            </div>

        </div>

    )
}

export default Result