import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBugs, getUnresolvedBugs, resolveBug } from '../../store/bugs';
import './styles.css';

export default function BugsList(){

  const dispatch = useDispatch();
  const bugs = useSelector(getUnresolvedBugs);

  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  return(
    <div className='wrapper'>
      <h2>List of Bugs:</h2>
      <ul>
        {bugs.map((bug) => (
        <li key={bug.id}>{bug.description}
        <button onClick={() => dispatch(resolveBug(bug.id))}>
          Resolved
        </button>
        </li>
        ))}
      </ul>
    </div>
  )
}

