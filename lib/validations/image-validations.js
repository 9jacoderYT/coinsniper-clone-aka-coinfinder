export const validateProfileImage = (image) => {
  // Image type check
  if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
    const error = "Wrong File Type";
    return error;
  }

  // Image size check
  if (image.size > 500000) {
    const error = "Image File must not exceed 500kb";
    return error;
  }

  return "success";
};
