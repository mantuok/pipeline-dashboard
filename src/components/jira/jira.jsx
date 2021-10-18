import React from 'react';
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

  const stepClass = classnames(
    `steps__step steps__step--jira step`,
    {"step--success": isStepSuccess(currentJiraStatus),
    "step--failed": isStepFailed(currentJiraStatus)}
  );

  const stepClickHandler = () => {
    dispatch(ActionCreator.selectStep(Step.JIRA))
  };

  return (
    <li 
      className={stepClass}
      onClick={stepClickHandler}
    >Jira item {id}</li>
  )
};

export default Jira;