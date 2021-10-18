export const mockPipelineItems = [
  {
    id: 123
  }
];

export const jiraSuccessResponse = {
  status: `SUCCESS`,
  data: {
    link: `https://123`,
    description: `New Feature`
  }
};

export const jiraFailedResponse = {
  status: `FAILED`,
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