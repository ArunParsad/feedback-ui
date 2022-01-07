import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStat = () => {
    const {feedback} = useContext(FeedbackContext)

    let average = feedback.reduce((acc, cur)=>{
        return acc + cur.rating
    }, 0) / feedback.length
    average = average.toFixed(1).replace(/[.,]0$/, '')
    return (
        <div className="feedback-stats">
            <h3>Reviews: {feedback.length}</h3>
            <h3>Average: {isNaN(average) ? 0 : average}</h3>
        </div>
    )
}

export default FeedbackStat
