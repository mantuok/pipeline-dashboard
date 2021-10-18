import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import classnames from 'classnames';
import {
  isStepSuccess,
  isStepFailed
} from '../../common/utils';
import {Step} from '../../const';

const BitBucket = () => {
  const dispatch = useDispatch();
  const currentBitBucketStatus = useSelector((state) => state.bitBucketStatus); 

  const stepClass = classnames(
    `steps__step steps__step--bit-bucket step`,
    {"step--success": isStepSuccess(currentBitBucketStatus),
    "step--failed": isStepFailed(currentBitBucketStatus)}
  );

  const stepClickHandler = () => {
    dispatch(ActionCreator.selectStep(Step.BIT_BUCKET))
  };

  return (
    <li 
      className={stepClass}
      onClick={stepClickHandler}
    >BitBucket</li>
  )
};

export default BitBucket;