import React from 'react';
import {useSelector} from 'react-redux';

const JiraDetails = () => {
  const jiraData = useSelector((state) => state.jiraData)

  const number = jiraData.number;
  const title = jiraData.title;
  const status = jiraData.status;
  const updated = jiraData.updated;
  const actions = jiraData.actions;

  return (
    <table className="details__table table">
      <tbody className="table__body">
        <tr className="table__row">
          <td className="table__data table__data--caption">Number</td>
          <td className="table__data table__data--value">{number}</td>
        </tr>
        <tr className="table__row">
          <td className="table__data table__data--caption">Title</td>
          <td className="table__data table__data--value">{title}</td>
        </tr>
        <tr className="table__row">
          <td className="table__data table__data--caption">Status</td>
          <td className="table__data table__data--value">{status}</td>
        </tr>
        <tr className="table__row">
          <td className="table__data table__data--caption">Updated</td>
          <td className="table__data table__data--value">{updated}</td>
        </tr>
        <tr className="table__row">
          <td className="table__data table__data--caption">Actions</td>
          <td className="table__data table__data--value">{}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default JiraDetails;