export default (jobs, { text }) => {
  return (
    jobs
      .filter((job) => {
          
        const textPositionPurpose = job.jobPositionPurpose.purpose
          .toLowerCase()
          .includes(text.toLowerCase());
        const textPositionLocationMatch = job.jobPositionLocation.city
          .toLowerCase()
          .includes(text.toLowerCase());
        const textMatch = job.jobPositionTitle.title
          .toLowerCase()
          .includes(text.toLowerCase());

        return (
          textMatch ||
          textPositionLocationMatch ||
          textPositionPurpose
        );
      })
      // eslint-disable-next-line array-callback-return
      .sort((a, b) => {
        return new Date(a.postDetail.startDate) <
          new Date(b.postDetail.startDate)
          ? 1
          : -1;
        //  } else if (sortBy === 'amount') {
        //    return a.amount < b.amount ? 1 : -1;
        //  }
      })
  );
};
