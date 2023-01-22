const fetchAPI = function (date) {
  let result = [];

  for (let i = 17; i <= 23; i++) {
    if (Math.random() < 0.5) {
      result.push(i + ":00");
    }
    if (Math.random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

export { fetchAPI };
