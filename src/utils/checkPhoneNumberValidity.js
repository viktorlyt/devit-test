export const checkPhoneNumberValidity = (value) => {
  if (value.length === 0) {
    return "Enter a valid phone number.";
  }

  const isNonWhiteSpace = /^\S*$/;
  if (!isNonWhiteSpace.test(value)) {
    return "Phone number must not contain whitespaces.";
  }

  const isContainsNumber = /^[0-9]*$/;
  if (!isContainsNumber.test(value)) {
    return "Phone number must contain only digits.";
  }

  const isValidLength = /^.{8,12}$/;
  if (!isValidLength.test(value)) {
    return "Phone number must be 8-12 digits Long.";
  }

  return null;
};
