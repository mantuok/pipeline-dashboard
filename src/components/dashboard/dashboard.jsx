import React from 'react';
import {useSelector} from 'react-redux';
import {nanoid} from 'nanoid'; 
import Pipeline from '../pipeline/pipeline';

const Dashboard = () => {
  const pipelines = useSelector((state) => state.pipelineItems)

  const getPipelines = () => {
    return pipelines.map((pipeline) => {
      return <Pipeline 
          pipeline={pipeline}  
          key={nanoid()}
        />
    })
  }

  return (
    <section className="page__dashboard dashboard">
      {getPipelines()}
    </section>
  )
}

export default Dashboard;