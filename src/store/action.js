export const ActionType = {
  SELECT_STEP: 'pipeline/selectStep',
  LOAD_JIRA: 'pipeline/loadJira',
  LOAD_BIT_BUCKET: 'pipeline/loadBitBucket'
};

export const ActionCreator = {
  loadJira: (data) => ({
    type: ActionType.LOAD_JIRA,
    payload: data
  }),
  loadBitBucket: (data) => ({
    type: ActionType.LOAD_BIT_BUCKET,
    payload: data
  }),
  selectStep: (selectedStep) => ({
    type: ActionType.SELECT_STEP,
    payload: selectedStep
  })
}