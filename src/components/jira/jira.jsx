import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import classnames from 'classnames';
import {
  StepStatus,
  Step
} from '../../const';
import {
  isStepSuccess,
  isStepFailed
} from '../../common/utils';

const Jira = (props) => {
  const {id} = props;
  const dispatch = useDispatch();
  const currentJiraStatus = useSelector((state) => state.jiraStatus);
  const lastUpdated = useSelector((state => state.jiraData.nodeUpdated));
  const number = useSelector((state => state.jiraData.number));

  const stepNameClass = classnames(
    `step__name`,
    {"step__name--success": isStepSuccess(currentJiraStatus),
    "step__ame--failed": isStepFailed(currentJiraStatus)}
  );

  const stepClickHandler = () => {
    dispatch(ActionCreator.selectStep(Step.JIRA))
  };

  return (
    <li 
      className="steps__step steps__step--jira step"
      onClick={stepClickHandler}
    >
      <span className="step__last-update">{lastUpdated}</span>
      <span className={stepNameClass}>Jira item {number}</span>
    </li>
  )
};

export default Jira; 