export const checkCountryValidity = (value) => {
  if (value.length === 0) {
    return "Enter a valid country code.";
  }
  
  const isNonWhiteSpace = /^\S*$/;
  if (!isNonWhiteSpace.test(value)) {
    return "Country code must not contain Whitespaces.";
  }

  const isOnlyNumber = /^\+\d+$/;
  if (!isOnlyNumber.test(value)) {
    return "Enter valid country code.";
  }

  return null;
};
