export const analyzeArray = (listOfNumbers) => {

  const isListValid = isOnlyNumbers(listOfNumbers);
  if (!isListValid) throw new Error('The list must contain only numbers');

  const average = listOfNumbers.reduce((a, b) => a + b, 0) / listOfNumbers.length;

  const min =  Math.min(...listOfNumbers);

  const max = Math.max(...listOfNumbers);

  const length = listOfNumbers.length;

  return { average, min, max, length }

}

const isOnlyNumbers = (array) => {

  let isValid = true;

  for (let i = 0; i < array.length; i++) {

    if (typeof array[i] !== 'number') {
      isValid = false;
      break
    } 

  }

  return isValid;
}