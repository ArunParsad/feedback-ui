import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this item is from context",
      rating: 10,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit: false
  })
// set item to be updated
  const editFeedback = (item) =>{
    setFeedbackEdit({
      item,
      edit: true
    })
  }
// update feedbak item
const updateFeedback = (id, updItem)=>{
  setFeedback(feedback.map((item)=> (item.id === id ? {...item, ...updItem} : item)))
}
// delete feedback
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };
// add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };


  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext
