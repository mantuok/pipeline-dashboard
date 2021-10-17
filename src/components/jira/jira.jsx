import React from 'react';
import {useSelector} from 'react-redux';
import classnames from 'classnames';
import {StepStatus} from '../../const';
import {
  isStepSuccess,
  isStepFailed
} from '../../common/utils';

const Jira = (props) => {
  const {id} = props;
  const currentJiraStatus = useSelector((state) => state.jiraStatus);

  const stepClass = classnames(
    `steps__step steps__step--jira step`,
    {"step--success": isStepSuccess(currentJiraStatus),
    "step--failed": isStepFailed(currentJiraStatus)}
  );

  return (
    <li className={stepClass}>Jira item {id}</li>
  )
};

export default Jira;