export const ActionType = {
  LOAD_PIPELINE_ITEMS: 'pipelineItems/loadPipelineItems',
};

export const ActionCreator = {
  loadPipelineItems: (pipelineItems) => ({
    type: ActionType.LOAD_PIPELINE_ITEMS,
    payload: pipelineItems
  })
}