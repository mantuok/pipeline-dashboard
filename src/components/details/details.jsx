import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {Step} from '../../const';
import JiraDetails from '../jira-details/jira-details';

const Details = () => {
  const selectedStep = useSelector((state) => state.selectedStep);
  const dispatch = useDispatch();

  const renderStepDetails = () => {
    switch (selectedStep) {
      case Step.JIRA: 
        return <JiraDetails />
    }
  };

  const closeClickHandler = () => {
    dispatch(ActionCreator.selectStep(Step.NONE))
  };

  return (
    <section className="pipeline__details details">
      <button 
        className="details__close"
        onClick={closeClickHandler}
      >Close</button>
      {renderStepDetails()}
    </section>
  )
};

export default Details;