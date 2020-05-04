export const sortByText = ({ text = '' } = {}) => ({
	type: 'SORT_BY_TEXT',
	text,
});

export const sortbyJobType = ({ jobType = '' } = {}) => ({
	type: 'SORT_BY_JOBTYPE',
	jobType,
});

export const sortByPublishedDay = ({ published = [] } = {}) => ({
	type: 'SORT_BY_PUBLISHED_DAY',
	published,
});

export const sortbyCity = ({ city = '' } = {}) => ({
	type: 'SORT_BY_CITY',
	city,
});
