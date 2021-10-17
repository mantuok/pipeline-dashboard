import {StepStatus} from '../const';

export const isStepSuccess = (status) => status === StepStatus.SUCESSS;
export const isStepFailed = (status) => status === StepStatus.FAILED;