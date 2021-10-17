import React from 'react';
import Jira from '../jira/jira';
import BitBucket from '../bit-bucket/bit-bucket';
import BuildPlan from '../build-plan/build-plan';

const Pipeline = (props) => {
  const {pipeline} = props;
  const {id} = pipeline;

  return (
    <div className="dashboard__pipeline pipeline">
      <button className="pipeline__reload">Reload</button>
      <ul className="pipeline__steps steps">
        <Jira id={id} />
        <BitBucket />
        <BuildPlan />
      </ul>
    </div>
  )
}

export default Pipeline;