import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'
const FeedbackList = ({feedback, feedbackDelete}) => {
    if(!feedback || feedback.length === 0){
        return <p>Not feedback yet</p>
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item)=>{
                return(
                    <FeedbackItem key={item.id} item={item} HandleDelete={feedbackDelete} />
                )
            })}
        </div>
    )
}
FeedbackItem.prototype = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired

        })
    )
}

export default FeedbackList
