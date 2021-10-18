export const ActionType = {
  SELECT_STEP: 'pipeline/selectStep',
  LOAD_JIRA: 'pipeline/loadJira',
};

export const ActionCreator = {
  loadJira: (data) => ({
    type: ActionType.LOAD_JIRA,
    payload: data
  }),
  selectStep: (selectedStep) => ({
    type: ActionType.SELECT_STEP,
    payload: selectedStep
  })
}