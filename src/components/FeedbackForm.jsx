import { useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

useEffect(()=>{
if(feedbackEdit.edit === true){
  setBtnDisabled(false)
  setText(feedbackEdit.item.text)
  setRating(feedbackEdit.item.rating)
}
}, [feedbackEdit])

  const changeHandelar = (e) => {
    if (text === "") {
      setMessage(null);
      setBtnDisabled(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be atleast 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  const selectedRating = (rating)=>{
    setRating(rating);
  }

  const onSubmitHandelar = (e) =>{
    e.preventDefault()
    const newFeedback = {
      text,
      rating
    }
    if(text.trim().length > 10){
      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }else{
        addFeedback(newFeedback) 
      }
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={onSubmitHandelar}>
        <h2>How would you rate service with us ?</h2>
        <RatingSelect ratingSelected={selectedRating} />
        <div className="input-group">
          <input
            value={text}
            onChange={changeHandelar}
            type="text"
            placeholder="Write review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
