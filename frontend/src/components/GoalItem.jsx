import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { updateGoal } from "../features/goals/goalSlice";
import { useState } from "react";

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  const [editing, isEditing] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(updateGoal(goal._id))
    
  };
  return (
    <>
      <div className="goal">
        <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
        <h2>{goal.text}</h2>
        <button
          onClick={() => dispatch(deleteGoal(goal._id))}
          className="close"
        >
          X
        </button>
        <button onClick={() => isEditing(true)} className="btn-sml">
          Edit
        </button>
        {editing && (
          <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              
              <input
                type="text"
                name="text"
                id="text"
              />
            </div>
            <div className="form-group">
                 <button className="btn btn-block" type="submit">Update goal</button>
            </div>
          </form>
        </section>
        )}
      </div>
    </>
  );
}

export default GoalItem;
