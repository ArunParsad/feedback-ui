import PropTypes from 'prop-types'
const FeedbackStat = ({feedback}) => {
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

FeedbackStat.prototype = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStat
