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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_JIRA:
      return {
        ...state,
        jiraStatus: action.payload.status,
        jiraData: action.payload.data
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