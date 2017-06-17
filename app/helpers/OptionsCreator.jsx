const capitalise = word => word[0].toUpperCase() + word.substr(1);

const createOptions = (sortByOptions) => {
  const options = [];

  if (sortByOptions.length > 1) {
    sortByOptions.forEach((option, index) => {
      if (index === 0) {
        options.push({
          key: option,
          icon: 'line chart',
          text: capitalise(option),
          value: option,
          content: capitalise(option),
        });
      } else {
        options.push({
          key: option,
          icon: 'newspaper',
          text: capitalise(option),
          value: option,
          content: capitalise(option),
        });
      }
    });
  } else {
    const option = sortByOptions[0];
    options.push({
      key: option,
      icon: 'line chart',
      text: capitalise(option),
      value: option,
      content: capitalise(option),
    });
  }

  return options;
};

export default createOptions;
