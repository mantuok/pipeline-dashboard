import React from 'react';
import {useSelector} from 'react-redux';

const JiraDetails = () => {
  const jiraData = useSelector((state) => state.jiraData)
  const link = jiraData.link;
  const description = jiraData.description;

  return (
    <table className="details__table table">
      <tr className="table__row">
        <td className="table__data table__data--caption">Link</td>
        <td className="table__data table__data--value">{link}</td>
      </tr>
      <tr className="table__row">
      <td className="table__data table__data--caption">Description</td>
        <td className="table__data table__data--value">{description}</td>
      </tr>
    </table>
  )
}

export default JiraDetails;