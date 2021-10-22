import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import classnames from 'classnames';
import {
  Step
} from '../../const';
import {
  isStepSuccess,
  isStepFailed
} from '../../common/utils';
import {getHumanDateFormat} from '../../common/day';

const Jira = (props) => {
  const {id} = props;
  const dispatch = useDispatch();
  const currentJiraStatus = useSelector((state) => state.jiraStatus);
  const lastUpdated = useSelector((state => state.jiraData.nodeUpdated));
  const lastUpdatedHumanFormat = getHumanDateFormat(lastUpdated);
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
      <span className="step__last-update">{lastUpdatedHumanFormat}</span>
      <span className={stepNameClass}>Jira</span>
    </li>
  )
};

export default Jira; 