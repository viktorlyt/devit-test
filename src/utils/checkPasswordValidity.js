export const checkPasswordValidity = (value) => {
  const isNonWhiteSpace = /^\S*$/;
  if (!isNonWhiteSpace.test(value)) {
    return "Password must not contain Whitespaces.";
  }

  // const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  // if (!isContainsUppercase.test(value)) {
  //   return "Password must have at least one Uppercase Character.";
  // }

  const isContainsLowercase = /^(?=.*[a-z]).*$/;
  if (!isContainsLowercase.test(value)) {
    return "Password must have at least one Lowercase Character.";
  }

  const isContainsNumber = /^(?=.*[0-9]).*$/;
  if (!isContainsNumber.test(value)) {
    return "Password must contain at least one Digit.";
  }

  // const isValidLength = /^.{8,16}$/;
  // if (!isValidLength.test(value)) {
  //   return "Password must be 8-16 Characters Long.";
  // }

  // const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  // if (!isContainsSymbol.test(value)) {
  //   return "Password must contain at least one Special Symbol.";
  // }

  return null;
};
