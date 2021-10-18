import React from 'react';
import {useSelector} from 'react-redux';

const BitBucketDetails = () => {
  const bitBucketData = useSelector((state) => state.bitBucketData)
  const comments = bitBucketData.comments;
  const tasks = bitBucketData.tasks;
  const prLink = bitBucketData.prLink;

  return (
    <table className="details__table table">
      <tr className="table__row">
        <td className="table__data table__data--caption">Comments</td>
        <td className="table__data table__data--value">{comments}</td>
      </tr>
      <tr className="table__row">
        <td className="table__data table__data--caption">Tasks</td>
        <td className="table__data table__data--value">{tasks}</td>
      </tr>
      <tr className="table__row">
        <td className="table__data table__data--caption">prLink</td>
        <td className="table__data table__data--value">{prLink}</td>
      </tr>
    </table>
  )
}

export default BitBucketDetails;