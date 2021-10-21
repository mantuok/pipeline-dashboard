import {ActionType} from './action';
import {mockPipelineItems} from '../mocks/pipeline-items';
import {StepStatus, Step} from '../const';

const initialState = {
  pipelineItems: mockPipelineItems,
  selectedStep: Step.NONE,
  jiraStatus: StepStatus.NONE,
  bitBucketStatus: StepStatus.NONE,
  buildPlanStatus: StepStatus.NONE,
  jiraData: {},
  bitBucketData: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_JIRA:
      return {
        ...state,
        jiraStatus: action.payload.nodeStatus,
        jiraData: action.payload
      };
    case ActionType.LOAD_BIT_BUCKET:
      return {
        ...state,
        bitBucketStatus: action.payload.status,
        bitBucketData: action.payload.data
      }; 
    case ActionType.SELECT_STEP: 
      return {
        ...state,
        selectedStep: action.payload
      }
    default:
      return state;
  }
}

export {reducer};