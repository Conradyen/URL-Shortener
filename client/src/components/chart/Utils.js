export const generateLastMonthDate = () => {
  var now = Date.now();
  let ret = [];

  let start = now - 30 * (1000 * 3600 * 24);
  for (let i = 0; i < 30; i++) {
    start += 1000 * 3600 * 24;
    const temp = new Date(start);
    ret.push(
      (temp.getMonth() + 1).toString() +
        "-" +
        temp.getDate().toString() +
        " " +
        temp.getFullYear().toString()
    );
  }
  return ret;
};
