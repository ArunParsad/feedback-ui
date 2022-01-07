import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button>
      <FaTimes
        className="close"
        color="red"
        onClick={() => deleteFeedback(item.id)}
      />
      </button>
      <button className="edit">
          <FaEdit color="green" onClick={() => editFeedback(item)}/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};
FeedbackItem.prototype = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
