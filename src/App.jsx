import {v4 as uuidv4} from 'uuid'
import React, {useState} from 'react'
import FeedbackData from'./data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import './index.css'
import FeedbackStat from './components/FeedbackStat'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id)=>{
        setFeedback(feedback.filter(item => item.id !== id))
    }
    const addFeedback = (newFeedback)=>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    return (
     <>
     <Header />
     <div className="container">
         <FeedbackForm handleAdd={addFeedback} />
    <FeedbackStat feedback={feedback} />
     <FeedbackList feedback={feedback} feedbackDelete={deleteFeedback} />
     </div>
    
     </>
    )
}

export default App
