const { BadRequestError } = require("./expressError");

/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route

  const numString = strNums.split(',');

  const nums = numString.map(num => {
    const convertedNum = Number(num);
    if (isNaN(convertedNum)) {
      throw new BadRequestError(`${num} is not a number`);
    } else return convertedNum;
    }
  );

  return nums;

}


module.exports = { convertStrNums };