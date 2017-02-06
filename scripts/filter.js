const filterMe = (array, string) => {

  validateString(string);

  let filtered = array.filter((value) => {
    return value !== string
  });

  return filtered;
}


const validateString = (string) => {
  if( typeof string !== 'string'){
    throw new Error('error')
  };

  if (!string){
    throw new Error('error')
  }
}

export default filterMe
