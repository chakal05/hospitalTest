export const sortByText = ({ text = '' } = {}) => ({
    type: 'SORT_BY_TEXT',
    text,
  });