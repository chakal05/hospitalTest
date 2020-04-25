export default (jobs, { text }) => {
  return (
    jobs
      .filter((job) => {
          
        const textPositionLocationMatch = job.jobPositionLocation.city
          .toLowerCase()
          .includes(text.toLowerCase());
        const textMatch = job.jobPositionTitle.title
          .toLowerCase()
          .includes(text.toLowerCase());

        return (
          textMatch ||
          textPositionLocationMatch
        );
      })
      // eslint-disable-next-line array-callback-return
      .sort((a, b) => {
          
        return new Date(a.postDetail.published) <
          new Date(b.postDetail.published)
          ? 1
          : -1;
      })
  );
};
