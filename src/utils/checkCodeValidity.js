export const checkCodeValidity = (value) => {
  if (value.length < 4) {
    return "Code must contain 4 digits.";
  }

  const isContainsNumber = /^[0-9]*$/;
  if (!isContainsNumber.test(value)) {
    return "Code must contain only digits.";
  }

  return null;
};
