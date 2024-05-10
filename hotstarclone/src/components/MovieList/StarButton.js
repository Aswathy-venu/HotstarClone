import React, { useContext } from 'react';
import { CountContext } from './CountProvider';

const StarButton = ({ onClick, index, starColor }) => {
  const { dispatch } = useContext(CountContext);

  const handleStarClick = () => {
    onClick(index);
    dispatch({ type: starColor === 'black' ? 'increment' : 'decrement' });
  };

  return (
    <button className="gradebutton" onClick={handleStarClick} style={{ color: starColor }}>
      <IoMdStar />
    </button>
  );
};

export default StarButton;
