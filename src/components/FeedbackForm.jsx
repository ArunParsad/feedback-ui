import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
const FeedbackForm = ({handleAdd}) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const changeHandelar = (e) => {
    if (text == "") {
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
    if(text.length > 10){
      handleAdd(newFeedback)
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
