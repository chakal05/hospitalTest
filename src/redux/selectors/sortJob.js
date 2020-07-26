export default (jobs, { text, jobType, published, city }) => {
	return (
		jobs
			// eslint-disable-next-line array-callback-return
			.filter((job) => {
				const textPositionLocationMatch = job.jobPositionLocation.city
					.toLowerCase()
					.includes(text.toLowerCase());
				const textMatch = job.jobPositionTitle.title
					.toLowerCase()
					.includes(text.toLowerCase());
				const textResult = textMatch || textPositionLocationMatch;
				const typeOfJobs = job.classification.extent.match(
					jobType
				);
				const [date, flag] = published;
				const getByCity = job.jobPositionLocation.city
					.toLowerCase()
					.match(city.toLowerCase());

				const publishedDay = () => {
					switch (flag) {
						case 'all':
							return job;
						case 'today':
							return job.postDetail.published.match(date);

						case 'last_7_days':
							return (
								new Date(
									job.postDetail.published
								).getTime() >= new Date(date).getTime()
							);

						case 'last_30_days':
							return (
								new Date(
									job.postDetail.published
								).getTime() >= new Date(date).getTime()
							);
						default:
							break;
					}
				};

				if (text !== '') {
					if (jobType) {
						return textResult && typeOfJobs;
					} else if (date) {
						return textResult && publishedDay();
					} else if (city) {
						return textResult && getByCity;
					} else if (jobType && date) {
						return textResult && typeOfJobs && publishedDay();
					} else if (date && jobType && city) {
						return (
							textResult &&
							typeOfJobs &&
							publishedDay() &&
							getByCity
						);
					} else {
						return textResult;
					}
				}

				if (jobType) {
					if (date) {
						return typeOfJobs && publishedDay();
					} else if (text) {
						return textResult && typeOfJobs;
					} else if (city) {
						return typeOfJobs && getByCity;
					} else if (date && text) {
						return typeOfJobs && textResult && publishedDay();
					} else if (date && text && city) {
						return (
							textResult &&
							typeOfJobs &&
							getByCity &&
							publishedDay()
						);
					} else {
						return typeOfJobs;
					}
				}

				if (date) {
					if (text) {
						return textResult && publishedDay();
					} else if (jobType) {
						return typeOfJobs && publishedDay();
					} else if (city) {
						return publishedDay() && getByCity;
					} else if (text && jobType) {
						return textResult && typeOfJobs && publishedDay();
					} else if (text && jobType && city) {
						return (
							textResult &&
							typeOfJobs &&
							getByCity &&
							publishedDay()
						);
					} else {
						return publishedDay();
					}
				}

				if (city) {
					if (text) {
						return textResult && getByCity;
					} else if (jobType) {
						return typeOfJobs && getByCity;
					} else if (date) {
						return getByCity && publishedDay();
					} else if (text && jobType) {
						return textResult && typeOfJobs && getByCity;
					} else if (text && jobType && date) {
						return (
							textResult &&
							typeOfJobs &&
							publishedDay() &&
							getByCity
						);
					} else {
						return getByCity;
					}
				}

				if (text === '') {
					return job;
				}

				if (jobType === '') {
					return job;
				}

				if (date === '') {
					return job;
				}

				if (city === '') {
					return city;
				}
			})
			.sort((a, b) => {
				return new Date(a.postDetail.published) <
					new Date(b.postDetail.published)
					? 1
					: -1;
			})
	);
};
