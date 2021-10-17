import React from 'react';

const Jira = (props) => {
  const {id} = props;
  return (
    <li className="steps__jira">Jira item {id}</li>
  )
};

export default Jira;