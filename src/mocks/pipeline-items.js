export const mockPipelineItems = [
  {
    id: 123
  }
];

export const jiraSuccessResponseOld = {
  status: `SUCCESS`,
  data: {
    link: `https://123`,
    description: `New Feature`
  }
};

export const jiraFailedResponse = {
  nodeStatus: `FAILED`,
  data: {
  }
};

export const bitBucketSuccessResponse = {
  status: `SUCCESS`,
  data: {
    comments: `12`,
    tasks: `23`,
    prLink: `https://456`,
  }
};

export const bitBucketFailedResponse = {
  status: `FAILED`,
  data: {
  }
};

export const jiraSuccessResponse = {
  nodeStatus: `SUCCESS`,
  number: `PRO-88457`,
  title: `Create flight plan for Document Command in DLAS`,
  status: `Closed`,
  updated: `07/Oct/21 11:07 AM`,
  actions: [
    {
      user: `Alex Roque`,
      date: `25/Aug/21 3:46 PM`,
      from: `Open`,
      to: `Analysis`,
      took: `5d 33m`
    },
    {
      user: `Rohit Pandey`,
      date: `26/Aug/21 12:57 AM`,
      from: `Approved`,
      to: `Analysis`,
      took: `2m 14s`
    },
    {
      user: `Farah Suhail`,
      date: `26/Aug/21 8:58 AM`,
      from: `Analysis`,
      to: `Approved`,
      took: `17h 9m`
    }
  ],
  nodeUpdated: `2021-10-19T22:14:29.5311709+03:00`
}