export const checkEmailValidity = (text) => {
  let re = /^.+@.+\.[a-zA-Z]{2,63}$/;

  if (re.test(text)) {
    return false;
  } else {
    return 'Enter a valid email address';
  }
};
