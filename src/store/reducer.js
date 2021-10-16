import {ActionType} from './action';
import {mockPipelineItems} from '../mocks/pipeline-items';

const initialState = {
  pipelineItems: mockPipelineItems
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