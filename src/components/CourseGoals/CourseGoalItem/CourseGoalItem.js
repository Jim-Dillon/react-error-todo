import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = (props) => {

  // when click on item, deleteHandler is called. deleteItemHandler function passed from App through CourseGoalList into here and executed. Clicked item passed back into deleteItemHandler in App and deleted from list 
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
