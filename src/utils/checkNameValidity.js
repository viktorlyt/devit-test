export const checkNameValidity = (value) => {
  if (value.length === 0) {
    return "Enter a valid full name.";
  }

  const isValidName = /^[A-Za-z ]+$/;
  if (!isValidName.test(value)) {
    return "Enter a valid full name.";
  }

  return null;
};
