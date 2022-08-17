const { BadRequestError } = require("./expressError");

const MISSING = "Expected key `nums` with comma-separated list of numbers.";

/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  if (!strNums) {
    throw new BadRequestError(MISSING);
  }
  const numString = strNums.split(',');

  const nums = numString.map(num => {
    if (isNaN(parseInt(num))) {
      throw new BadRequestError(`${num} is not a number`);
    } else return parseInt(num);
    }
  );

  return nums;

}


module.exports = { convertStrNums };