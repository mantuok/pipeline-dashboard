import React from 'react';

const Jira = (props) => {
  const {id} = props;
  return (
    <div className="pipeline__jira">Jira item {id}</div>
  )
};

export default Jira;