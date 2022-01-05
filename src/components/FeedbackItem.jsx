import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
const FeedbackItem = ({item, HandleDelete}) => {
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <FaTimes className='close' color='red' onClick={()=> HandleDelete(item.id)}/>
            <div className="text-display">
                {item.text}
            </div>
        </Card>
    )
}
FeedbackItem.prototype = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
