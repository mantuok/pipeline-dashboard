import {ActionType} from './action';
import {mockPipelineItems} from '../mocks/pipeline-items';
import {StepStatus} from '../const';

const initialState = {
  pipelineItems: mockPipelineItems,
  jiraStatus: StepStatus.FAILED,
  bitBucketStatus: StepStatus.NONE,
  buildPlanStatus: StepStatus.NONE
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PIPELINE_ITEMS:
      return {
        ...state,
        pipelineItems: action.payload
      };
    default:
      return state;
  }
}

export {reducer};