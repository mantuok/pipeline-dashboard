import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {ActionCreator} from '../../store/action';
import Jira from '../jira/jira';
import BitBucket from '../bit-bucket/bit-bucket';
import BuildPlan from '../build-plan/build-plan';
import {getRandomResponse} from '../../mocks/random';
import {
  jiraSuccessResponse, 
  jiraFailedResponse,
  bitBucketSuccessResponse,
  bitBucketFailedResponse
} from '../../mocks/pipeline-items';
import { 
  Step,
  StepStatus
} from '../../const';
import Details from '../details/details';
import Search from '../search/search';

const Pipeline = (props) => {
  const {pipeline} = props;
  const {id} = pipeline;
  const selectedStep = useSelector((state) => state.selectedStep);
  const jiraNumber = useSelector((state) => state.jiraData.number);
  const jiraTitle = useSelector((state) => state.jiraData.title);


  const dispatch = useDispatch();

  const renderDetails = () => {
    if (selectedStep !== Step.NONE) {
      return <Details />
    }
  };

  const reloadClickHandler = () => {
    const jiraResponse = getRandomResponse(jiraSuccessResponse, jiraFailedResponse);
    console.log(jiraResponse)
    const bitBucketResponse = getRandomResponse(bitBucketSuccessResponse, bitBucketFailedResponse)
    dispatch(ActionCreator.loadJira(jiraResponse));
    if (jiraResponse.status === StepStatus.SUCESSS) {
      dispatch(ActionCreator.loadBitBucket(bitBucketResponse))
    }
  };

  return (
    <div className="dashboard__pipeline pipeline">
      <button 
        className="pipeline__reload"
        onClick={reloadClickHandler}
      >Reload</button>
      <Search />
      <div className="pipeline__title">{jiraNumber} {jiraTitle}</div>
      <ul className="pipeline__steps steps">
        <Jira id={id} />
        <BitBucket />
        <BuildPlan />
      </ul>
      {renderDetails()}
    </div>
  )
}

export default Pipeline;